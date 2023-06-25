/** @format */

const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const config = require("config");
const { createError } = require("../util/error");
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const User = require("../models/User");
const generateAccountNumber = require("../helpers/utils");

// register user
const register = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const avatar = gravatar.url(req.body.email, {
    s: "200",
    r: "pg",
    r: "mm",
  });

  const { name, username, email, phone, password, userRef } = req.body;
  if (!name || !username || !email || !phone || !password) {
    return next(createError(403, "Invalid credentials"));
  }

  const isAlreadyExist = await User.findOne({ email: email });
  if (isAlreadyExist) {
    return next(createError(403, "User already exists"));
  }

  const user = await User({
    name,
    username,
    email,
    password,
    phone,
    avatarUrl: avatar,
    accountNumber: generateAccountNumber(10),
    accountBalance: generateAccountBalance(5),
    userRef,
  });

  bcryptjs.genSalt(10, (err, salt) => {
    bcryptjs.hash(user.password, salt, (err, hash) => {
      if (err) throw err;
      user.password = hash;
    });
  });
};

module.exports = { register };
