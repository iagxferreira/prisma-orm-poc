import express from 'express'
import { PrismaClient } from '@prisma/client'
import ProductController from './controllers/product-controller'
import bodyParser from "body-parser";
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', ProductController.get)
app.post('/', ProductController.post)

new PrismaClient().$connect().then(()=>{
    app.listen(port, () => { console.log(`Listening on port ${port}`)})
})

