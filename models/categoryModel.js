const { Schema, model } = require("mongoose");
const Joi = require("joi");

const categorySchema = Schema({
   name: { type: String, required: true, unique: true },
   image: { type: String },
   parentId: { type: String },
   slug: {
      type: String,
      required: true,
      unique: true
   }
}, {
   timestamps: true
})

categorySchema.index({ name: 1 })

// model
const Category = model("Category", categorySchema);

// validate
function validateCategory(category) {
   const schema = Joi.object({
      name: Joi.string().required(),
      image: Joi.string(),
      parentId: Joi.string(),
      slug: Joi.string().unique().required()
   })
   return schema.validate(category)
}

module.exports = { Category, validateCategory }