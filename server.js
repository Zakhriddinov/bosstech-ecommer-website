const express = require("express");
const connectDB = require("./config/db");
const { engine } = require("express-handlebars");
const dotenv = require("dotenv");
const path = require("path");
require("colors");

// Env variables
dotenv.config()

// Connecting to database
connectDB();

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, './public')));

// Initialize template engine (Handlebars)
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
   res.render('home', {
      title: "salom"
   })
})


// Initial routes
// app.use("/api/v1/products", require("./routes/productRoutes"));

// server started
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`))