import express from 'express'
import dotenv  =require("dotenv");
import mainRouter from "./SoftSora-Technical/Routes/MainRouter";
const app =express();
import cors from 'cors'
import {connectDB} from "./SoftSora-Technical/Config/db";

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

connectDB()
// mongodb://localhost:27017/
app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization'],
    credentials: true,
}));

app.use('/api/v1',mainRouter.router);

const port =process.env.PORT || 8080 ;
app.listen(port,()=>{
    console.log("Server Started on Port : " +port)
} )
