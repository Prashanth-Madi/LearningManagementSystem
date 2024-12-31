import express, { Request, RequestHandler, Response } from "express"
import dotenv from "dotenv"
import app from "./app"

dotenv.config()

const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})


