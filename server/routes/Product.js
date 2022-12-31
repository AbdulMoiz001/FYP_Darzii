import Express  from "express";
import { addNewProduct, getAllProducts, removeProduct, getFeaturedProducts } from "../controllers/Products.js";
import { verify } from "./verifyToken.js";

const routerProduct = Express.Router();

//admin
routerProduct.post('/addProduct',verify, addNewProduct);
routerProduct.delete('/removeProduct',verify, removeProduct);




//public
routerProduct.get('/featuredProduct', getFeaturedProducts);
routerProduct.get('/', getAllProducts);





export default routerProduct;