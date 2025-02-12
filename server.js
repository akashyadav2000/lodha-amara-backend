require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const formRoutes = require("./routes/formRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use("/api/form", formRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
