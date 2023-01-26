const mongoose = require("mongoose");
const config = require("./config");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(config.connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
