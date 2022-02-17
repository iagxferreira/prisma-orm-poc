import express from 'express'
import bodyParser from "body-parser";
import { Routes as routes } from './routes';
const app = express()
const port = 3000

app.use(bodyParser.json())

app.use(routes)

app.listen(port, () => { console.log(`Listening on port ${port}`)})

