/** @format */
require("dotenv").config();
const express = require("express");
const http = require("http");
const morgan = require("morgan");
const socketio = require("socket.io");
const config = require("config");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoute");

const app = express();
connectDB();

// Middleware bodyparser
app.use(express.json());

const server = http.createServer(app);
const io = socketio(server).sockets;

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Welcome to Barter app");
});

// API endpoints
app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Listening to server on http://localhost:${PORT}`);
});
