import express from 'express';
import { LoginUser, registerUser } from '../controllers/auth.js';

const routerAuth = express.Router();

routerAuth.post('/registerUser',registerUser );
routerAuth.post('/LoginUser',LoginUser);


export default routerAuth;