const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  adress: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  uptadetAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = User = model("User", userSchema);
