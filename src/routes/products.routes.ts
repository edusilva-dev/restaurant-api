import { ProductController } from "@controllers";
import { Router } from "express";

const productsRoutes = Router()
const productsController = new ProductController()

productsRoutes.get('/', productsController.index)

export { productsRoutes }