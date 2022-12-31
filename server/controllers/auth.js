import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import userSchemaMsg from "../models/userShema.js";



//Register
export const registerUser = async (req,res) =>
{
    const newUser = new userSchemaMsg({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY )
        .toString(),
        roles: ["user", req.body.roles],

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
        const user = await userSchemaMsg.findOne({email: req.body.email});
        if(!user)
        {
            res.status(401).json("Wrong password or username!");
            return;
        }
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
        if(originalPassword != req.body.password)
        {
            res.status(401).json("Wrong password or username!" + req.body.password);
        }
        else
        {
            const accessToken = jwt.sign(
                {
                    id : user._id,
                    roles: user.roles,
                },
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
  
