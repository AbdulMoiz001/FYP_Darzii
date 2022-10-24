import  Jwt  from "jsonwebtoken";

export const verify = (req,res,next) =>
{
    const authHeader = req.headers.token;
    if(authHeader)
    {
        const token = authHeader;

        Jwt.verify(token, process.env.SECRET_KEY, (err,user) =>
        {
            if(err) res.status(403).json("Token is not valid");

            req.user = user;

            next();
        }
        );
    }else
    {
        return res.status(401).json("You are not authenticated");
    }
}