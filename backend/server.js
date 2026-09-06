const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const http = require("http");
const { Server } = require("socket.io");
const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// Connecting to database
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 4000;

// Create HTTP Server & Attach Socket.IO
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});

app.set("io", io);

let activeShoppers = 38;
const productViewers = {};

io.on("connection", (socket) => {
  activeShoppers += 1;
  io.emit("presence_update", { activeShoppers });

  // Handle live product viewing
  socket.on("viewing_product", ({ productId }) => {
    productViewers[productId] = (productViewers[productId] || 0) + 1;
    io.emit("viewing_update", {
      productId,
      viewerCount: productViewers[productId],
    });
  });

  socket.on("leave_product", ({ productId }) => {
    if (productViewers[productId] && productViewers[productId] > 0) {
      productViewers[productId] -= 1;
      io.emit("viewing_update", {
        productId,
        viewerCount: productViewers[productId],
      });
    }
  });

  // Handle new orders in real-time
  socket.on("place_order", (orderData) => {
    io.emit("new_live_activity", {
      type: "purchase",
      message: `${orderData.buyerName || "A shopper"} just bought ${orderData.productName || "an item"}`,
      time: new Date().toLocaleTimeString(),
    });
    io.emit("stock_updated", {
      productId: orderData.productId,
      quantity: orderData.quantity,
    });
  });

  // Handle live order status updates
  socket.on("update_order_status", ({ orderId, status }) => {
    io.emit("order_status_updated", { orderId, status });
  });

  socket.on("disconnect", () => {
    activeShoppers = Math.max(12, activeShoppers - 1);
    io.emit("presence_update", { activeShoppers });
  });
});

server.listen(PORT, () => {
  console.log(`⚡ Real-Time Flipkart MERN Server is working on http://localhost:${PORT}`);
  console.log(`🔌 WebSockets / Socket.io live event bus is operational`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Unhandled Rejection Warning: ${err.message}`);
});

module.exports = app;

