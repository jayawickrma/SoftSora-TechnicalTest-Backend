import express from 'express'
import dotenv  =require("dotenv");
import mainRouter from "./SoftSora-Technical/Routes/MainRouter";
const app =express();
import {connectDB} from "./SoftSora-Technical/Config/db";

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

connectDB()
// mongodb://localhost:27017/

app.use('/api/v1',mainRouter.router);

const port =process.env.PORT || 8080 ;
app.listen(port,()=>{
    console.log("Server Started on Port : " +port)
} )
