const { Schema, model } = require("mongoose");
const Joi = require("joi");

const cartSchema = Schema({
   product: {

      title: {
         type: String,
         required: true
      },
      price: {
         type: String,
         required: true
      },
      quantity: {
         type: Number,
         required: true
      },
      total: {
         type: Number,
         required: true
      },
   },
   total: { type: Number, required: true },
}, {
   timestamps: true
})