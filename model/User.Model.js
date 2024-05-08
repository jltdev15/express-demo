// Import the library or dependency
// ES5 Javascript
const mongoose = require("mongoose");

// ES6 JS syntax
// import mongoose from 'mongoose'

// Create Structure or Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    unique: true,
    type: String,
  },
  password: String,
  taskList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
