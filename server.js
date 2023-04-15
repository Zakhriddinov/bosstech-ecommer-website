const express = require("express");
require("dotenv").config();

const app = express();

// routes:
app.use("/api/v1/products", require("./routes/productRoutes"));

// server started
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`))