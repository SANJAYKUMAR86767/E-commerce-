const mongoose = require("mongoose");

const connectDatabase = () => {
  const dbUri = process.env.DB_URI || "mongodb://127.0.0.1:27017/Ecommerce";
  
  mongoose
    .connect(dbUri)
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error(`MongoDB Connection Error: ${err.message}`);
      if (err.message.includes("querySrv") || err.message.includes("ECONNREFUSED")) {
        console.error("\n[Troubleshooting Tips]:");
        console.error("1. Make sure your IP is whitelisted (0.0.0.0/0) in MongoDB Atlas Network Access.");
        console.error("2. If using Windows, change your network DNS to Google DNS (8.8.8.8 and 8.8.4.4).");
        console.error("3. Alternatively, install Local MongoDB and change DB_URI in backend/config/config.env to: mongodb://127.0.0.1:27017/Ecommerce\n");
      }
    });
};

module.exports = connectDatabase;
