import {Product} from "../../src/domain";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

describe("Products entity", ()=> {
    beforeAll(async ()=> {
        await prisma.$connect()
    })

    afterAll(async ()=> {
        await prisma.product.deleteMany()
        await prisma.$disconnect()
    })

    test("should i create a product in database", async ()=> {
        const product = new Product('balm', 30, 2)
        const inserted = await prisma.product.create({data: product})
        expect(inserted).toHaveProperty('id')
    })

    test("should i list products in database", async ()=> {
        const product = new Product('balm', 30, 2)
        const inserted = await prisma.product.create({data: product})
        const products = await prisma.product.findMany()
        expect(products).not.toBe(null)
        expect(products.length).toBe(1)
    })
})
