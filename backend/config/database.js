const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI || "mongodb://localhost:27017/Ecommerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      serverSelectionTimeoutMS: 2000,
      bufferCommands: false,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(`MongoDB Connection Warning: ${err.message}`);
      console.log(`Express API Server is running on port ${process.env.PORT || 4000}`);
    });
};

module.exports = connectDatabase;
