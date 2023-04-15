const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = Schema({
   firstname: {
      type: String,
      required: true
   },
   lastName: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   phone: {
      type: String
   },
   address: {
      address: { type: String },
      country: { type: String },
      zipCode: { type: String },
      city: { type: String },
      state: { type: String }
   },
   password: {
      type: String,
      required: true
   },
   isAdmin: {
      type: Boolean,
      required: true,
      default: false
   }
}, {
   timestamps: true
})

// model
const User = model("User", userSchema);

// validate schema
function validateUser(user) {
   const schema = Joi.object({
      firstname: Joi.string().min(5).max(50).required(),
      lastName: Joi.string().min(5).max(50).required(),
      email: Joi.string().min(5).max(255).unique().required(),
      phone: Joi.string().min(5).required(),
      password: Joi.string().min(8).max(255).required(),
      address: {
         address: Joi.string().min(5),
         country: Joi.string().min(5),
         zipCode: Joi.string().min(6),
         city: Joi.string().min(3),
         state: Joi.string().min(2)
      },
      isAdmin: Joi.boolean().required()
   })
   return schema.validate(user)
}

module.exports = { User, validateUser }