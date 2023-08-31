/** @format */
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");
const createError = require("../util/error");
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const User = require("../models/User");
const generateNumber = require("../helpers/utils");

// register user
const register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const avatar = gravatar.url(req.body.email, {
      s: "200",
      r: "pg",
      d: "mm",
    });

    const { name, username, email, phone, password, userRef } = req.body;
    if (!name || !username || !email || !phone || !password) {
      return next(createError(403, "Invalid credentials"));
    }

    const isAlreadyExist = await User.findOne({ email: email });
    if (isAlreadyExist) {
      return res.status(403).json("User already exists");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const user = new User({
      name,
      username,
      email,
      password: hash,
      phone,
      avatarUrl: avatar,
      accountNumber: generateNumber(10),
      accountBalance: generateNumber(5),
      userRef,
    });

    const newUser = await user.save();

    console.log(newUser);

    res.status(200).json({
      status: "success",
      message: "User created successfully",
      newUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "Create user failed", error });
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign({ id: user._id }, process.env.JWT);

    const { password, ...otherDetails } = user._doc;
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        status: "success",
        message: "Login successful",
        details: { ...otherDetails },
      });
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login };
