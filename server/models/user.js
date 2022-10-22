import mongoose from "mongoose";

// ++++++++++++++++++++++++++++++++++
//!! userShema.js is the main one
// ++++++++++++++++++++++++++++++++++

const user = new mongoose.Schema(
    {
        username:
        {
            type:String,
            required:true,
            // unique: true
        },
        email:
        {
            type:String,
            required:true,
            // unique: true
        },
        password:
        {
            type: String,
            required: true
        },
        isAdmin:
        {
            type: Boolean,
            default: false
        },
    },
    {timestamps: true}
);


const userMsg = mongoose.model('userMsg', user);
export default userMsg;