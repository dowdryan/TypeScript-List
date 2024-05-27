import { hey } from './helper.js'
// import yo from './helper.cjs'

// console.log(hey)
// console.log(yo)


import express, { Express, Request, Response } from "express";
const port = 8000
const app: Express = express()

app.get("/", (req: Request, res: Response) => {
    res.send(hey)
})

app.listen(port, () => {
    console.log(`Now listening on port ${port}`)
})