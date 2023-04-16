const { Product } = require("../models/productModel");
const asyncHandler = require("express-async-handler");

// @route GET api/products
// @desc Get all products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
   try {
      const products = await Product.find({});

      return res.status(200).json({
         products
      })
   } catch (error) {
      console.log(error);
   }
})

module.exports = {
   getProducts
}