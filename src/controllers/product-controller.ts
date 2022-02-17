import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import {Product} from "../domain";

export class ProductController {
    async get(req: Request, res: Response, next: NextFunction){
        const prisma = new PrismaClient()
        const products = await prisma.product.findMany()
        res.json({ products })
    }

    async post(req: Request, res: Response, next: NextFunction){
        const prisma = new PrismaClient()
        const { name , price, quantity} = req.body
        const product = await prisma.product.create({
            data: new Product( name , price, quantity)
        })
        res.json({ product })
    }
}

export default new ProductController()
