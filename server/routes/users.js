import Express  from "express";
import { GetAll, userDelete, userGet, userUpdate } from "../controllers/users.js";
import { verify } from "./verifyToken.js";


//
const routerUser = Express.Router();

routerUser.put("/:id", verify ,userUpdate);
routerUser.delete("/userDelete/:id", verify, userDelete);
routerUser.get("/userGet/:id", userGet);
routerUser.get("/getAllUsers", GetAll);

export default routerUser;