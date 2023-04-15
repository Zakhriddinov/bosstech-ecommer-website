const { Schema, model } = require("mongoose");
const Joi = require("joi");

const reviewSchema = Schema({
   title: {
      type: String,
      required: true
   },
   comment: {
      type: String,
      required: true
   },
   rating: {
      type: Number,
      required: true
   },
   user: {
      _id: { type: Schema.Types.ObjectId, required: true },
      name: { type: String, required: true }
   }
}, {
   timestamps: true
})

const Review = model("Review", reviewSchema);

function validateReview(review) {
   const schema = Joi.object({
      title: Joi.string().min(4).required(),
      comment: Joi.string().min(8).required(),
      rating: Joi.number().required(),
   })
   return schema.validate(review);
}


module.exports = { Review, validateReview }