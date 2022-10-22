import userMsg from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";



//Register
export const registerUser = async (req,res) =>
{
    const newUser = new userMsg({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY ).toString(),
    });
    try {
        const user = await newUser.save();
        res.status(201).json(user);
        
    } catch (error) {
        res.status(500).json(error);
    }

}


//LogIn
export const LoginUser = async (req,res) =>{
    try {
        //find using email
        const user = await userMsg.findOne({email: req.body.email});
        if(!user)
        {
            res.status(401).json("Wrong password or username!");
            return;
        }
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
        if(originalPassword != req.body.password)
        {
            res.status(401).json("Wrong password or username!");
        }
        else
        {
            const accessToken = jwt.sign(
                {id : user._id, isAdmin: user.isAdmin},
                process.env.SECRET_KEY,
                {expiresIn: "2d"}
            );

           const {password, ...info} = user._doc;
            res.status(200).json({...info, accessToken});
        }


    } catch (error) {
        res.status(500).json(error);
    }

}
  
