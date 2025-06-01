import express from 'express'
import dotenv  =require("dotenv");
const app =express();

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const port =process.env.PORT || 8080 ;
app.listen(port,()=>{
    console.log("Server Started on Port : " +port)
} )
