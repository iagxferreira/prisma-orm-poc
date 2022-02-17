import { NextFunction, Request, Response } from "express";
import {Product} from "../domain";
import connection from "../infra/database";

class ProductController {
    async get(req: Request, res: Response, next: NextFunction){
        const products = await connection.product.findMany({select:{  id: true }})
        res.json({ products })
    }

    async post(req: Request, res: Response, next: NextFunction){
        const { name , price, quantity} = req.body
        const product = await connection.product.create({
            data: new Product( name , price, quantity)
        })
        res.json({ product })
    }
}

export default new ProductController()
