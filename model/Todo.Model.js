// Import the library or dependency
// ES5 Javascript
const mongoose = require("mongoose");

// ES6 JS syntax
// import mongoose from 'mongoose'

// Create Structure or Schema
const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isFinished: {
    type: String,
    default: false,
  },
  createdAt: {
    type: String,
    default: setDateValue(),
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

// Formatting the date to easily understand by human

function setDateValue() {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return `${month} ${day} , ${year}`;
}

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
