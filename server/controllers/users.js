import userMsg from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";


//Update
export const userUpdate = async (req,res) =>
{
    if(req.user.id == req.params.id || req.user.isAdmin)
    {
        if(req.body.password)
        {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY ).toString();
        }
        try {
            const updateUser = await userMsg.findByIdAndUpdate(req.params.id, {
                $set:req.body
            });
            res.status(200).json(updateUser);
            
        } catch (error) {
            rew.status(500).json(error);
            
        }
    }
    else{
        res.status(403).json("You can only update your account");
    }
}

//Delete
//Get
//GetAll
//Get User Stats
