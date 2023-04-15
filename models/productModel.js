const { Schema, model } = require("mongoose");
const Joi = require("joi");

const productSchema = Schema({
   title: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   price: {
      type: Number,
      required: true,
   },
   category: {
      type: String,
      required: true
   },
   images: {
      type: Object
   },
   rating: {
      type: Number
   },
   sales: {
      type: Number,
      default: 0
   },
   count: {
      type: Number,
      required: true,
      default: 0
   },
   reviews: [
      {
         type: Schema.Types.ObjectId,
         ref: ""
      }
   ],
   reviewsNumber: {
      type: Number,
      default: 0
   }
}, {
   timestamps: true
})

// model
const Product = model("Product", productSchema);

// validate
function validateProduct(product) {
   const schema = Joi.object({
      title: Joi.string().min(5).max(50).required(),
      description: Joi.string().min(50).required(),
      price: Joi.number().min(4).required(),
      category: Joi.string().required(),
      count: Joi.number().required(),
      rating: Joi.number(),
      reviewsNumber: Joi.number(),
      sales: Joi.number()
   })
}

module.exports = {
   Product,
   validateProduct
}