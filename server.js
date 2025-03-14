const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const jobRoutes = require("./routes/jobRoutes");

const authRoutes = require('./routes/authRoutes');
const reviewRoutes = require("./routes/reviewRoutes");
const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.use('/api/auth', authRoutes);
app.use("/api", jobRoutes);
app.use("/api/reviews", reviewRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
