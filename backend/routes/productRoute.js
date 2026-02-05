import express from 'express'
import { listProducts, addProduct, removeProduct, singleProduct } from '../controllers/productController.js'
import upload from '../middleware/multer.js';

const productRouter = express.Router();

productRouter.post('/add', upload.fields([{ name: 'images1', maxCount: 1 }, { name: 'images2', maxCount: 1 }, { name: 'images3', maxCount: 1 }, { name: 'images4', maxCount: 1 }]), addProduct);
productRouter.post('/remove', removeProduct);
productRouter.post('/single', singleProduct);
productRouter.get('/list', listProducts)

export default productRouter
