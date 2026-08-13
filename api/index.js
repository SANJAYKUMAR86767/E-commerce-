const dns = require("dns");
try {
  dns.setServers(["8.8.8.8", "8.8.4.4"]);
} catch (e) {
  console.log("DNS setServers warning:", e.message);
}

const app = require("../backend/app");
const connectDatabase = require("../backend/config/database");

// Connect DB if not connected
connectDatabase();

module.exports = app;
