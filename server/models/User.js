/** @format */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    avatarUrl: { type: String },
    accountNumber: { type: Number, required: true },
    accountBalance: { type: Number, required: true },
    registrationDate: { type: Date, default: Date.now() },
    userRef: { type: String, default: "" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
