import mongoose from "mongoose";

const measurementOrderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },

    amount: { type: Number, default: 1 },
    price: { type: Number, required: true },
    refernceClothes: { type: Boolean, required: true, default: false },
    mesauremnet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "measurement",
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],

      //Incomplete: Needs type of measurements and their attributes


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

const mesauremnetOrders = mongoose.model(
    "measurementOrder",
    measurementOrderSchema
);

export default mesauremnetOrders;
