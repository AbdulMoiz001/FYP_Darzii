import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  image:
  {
    type: String
  },
  firstName: {
    type: String,
    required: true
    },
  lastName: {
    type: String,
    default: "",
  },
  // displayName: {
  //   type: String,
  // },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // provider: {
  //   type: String,
  // },
  // providerData: {},
  additionalProvidersData: {},
  // roles: {
  //   type: [
  //     {
  //       type: String,
  //       enum: ["user", "admin"],
  //     },
  //   ],
  //   default: ["user"],
  // },
  updated: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  /* For reset password */
  // resetPasswordToken: {
  //   type: String,
  // },
  // resetPasswordExpires: {
  //   type: Date,
  // },
});

const userSchemaMsg = mongoose.model("userSchemaMsg", UserSchema);

export default userSchemaMsg;
