import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "orderCart",
    },
  
  measurements: [
    { type: mongoose.Schema.Types.ObjectId, ref: "measurementOrder" },
  ],
  
  status: {
    type: String,
    default: 'Not processed',
    enum: [
      'Not processed',
      'Processing',
      'Shipped',
      'Delivered',
      'Cancelled',
    ], // enum means string objects
  },

  updated: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const OrderSchema = new Schema({
  cart: {
    type: Schema.Types.ObjectId,
    ref: "Cart",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  total: {
    type: Number,
    default: 0,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});
