const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const DbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
    console.log("database connected successfully");
  } catch (error) {
    console.log("Something went wrong", error.message);
  }
};

module.exports = DbConnect;