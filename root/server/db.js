const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

function connectDB() {
  mongoose.connect(
    process.env.DATABASE_ACCESS,
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("MongoDB Connection Successfully");
  });

  connection.on("error", () => {
    console.log("MongoDB Connection Error");
  });
}

connectDB();

module.exports = mongoose;
