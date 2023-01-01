import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  image: {
    type: String,
    default: "",
  },
  username: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [
      {
        type: String,
        enum: ["user", "admin"],
      },
    ],
    default: ["admin"],
  },
  updated: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const userSchema = mongoose.model("user", UserSchema);

export default userSchema;
