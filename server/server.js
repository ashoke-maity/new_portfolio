// packages import 
const dotenv = require("dotenv").config();
const express = require('express');
const cors = require('cors');
const corsOption = require('./middlewares/Cors.Middlware');
const app = express();

// database import
const DbConnect = require("./configs/db");
DbConnect();

// middleware
app.use(express.json());
app.use(cors(corsOption));

// routes import
const adminRoutes = require('./routes/adminRoutes');
app.use(process.env.ADMIN_ROUTE, adminRoutes);

// server start
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});