import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },

  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
    required: true,
  },
  numReviews: {
    type: Number,
    default: 0,
    required: true,
  },

  featured:
  {
    type: Boolean,
    default: false,
  },
  reviews: [
    {
      reviewer_id: {type: String},
      name: {type: String},
      comment: {type: String},
      rating:
       {type: Number,
      $lt: 6},
    }
  ],

  updated: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("product", ProductSchema);

export default Product;