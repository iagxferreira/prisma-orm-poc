import { Router } from "express";
import ProductController from "../../../controllers/product-controller";
const router = Router();

router.get('/', ProductController.get)
router.post('/', ProductController.post)

export const ProductsRouter = router;