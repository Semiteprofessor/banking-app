/** @format */

const router = require("express").Router();

const { register, login } = require("../controllers/authController");

// Register user
router.post("/register", register);

// Login user
router.post("/login", login);

module.exports = router;
