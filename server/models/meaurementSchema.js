import mongoose from "mongoose";

const measurementSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  //Incomplete: Needs type of measurements and their attributes

  updated: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const mesauremnets = mongoose.model("measurement", measurementSchema);

export default mesauremnets;
