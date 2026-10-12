const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

// 1. Import Routes
const authRoutes = require("./routes/authRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const bidRoutes = require("./routes/bidRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

const app = express();


// Connect Database
connectDB();

// Global Middleware
app.use(cors());
app.use(express.json());

// Register Routes
app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/bids", bidRoutes);
app.use("/api/notifications", notificationRoutes);

// Health Check
const PORT = process.env.PORT || 5050;
app.get("/health", (req, res) => res.json({ 
  status: "Server is UP", 
  port: PORT,
  time: new Date().toISOString() 
}));

// Error Handler
app.use((err, req, res, next) => {
  console.error("❌ Backend Error:", err.stack);
  
  res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
