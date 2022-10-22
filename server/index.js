import  express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";


import postRoutes from './routes/posts.js';
import routerAuth from "./routes/auth.js";

const app = express();

dotenv.config();


app.use(bodyParser.json({ limit : "30mb", extended : true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


// app.use('/posts', postRoutes);
app.use('/auth', routerAuth);

const CONNECTION_URL = "mongodb+srv://Darzii:darzii123@cluster0.fwhecap.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useUnifiedTopology: true,})
    .then(()=> app.listen(PORT, ()=> console.log(`Server Running on Port ${PORT}`)))
    .catch((error) => console.log(error.message));


