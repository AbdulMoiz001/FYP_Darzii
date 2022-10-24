import Express  from "express";
import { userUpdate } from "../controllers/users.js";
import { verify } from "./verifyToken.js";


//
const routerUser = Express.Router();

routerUser.put("/:id", verify ,userUpdate);

export default routerUser;