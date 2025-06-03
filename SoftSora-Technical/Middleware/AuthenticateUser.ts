import express from "express";
import jwt,{Secret} from "jsonwebtoken";

export function authenticateToken(req:express.Request,res:express.Response,next:express.NextFunction){
    const authHeader =req.headers.authorization;
    const token=authHeader?.split(' ')[1];

    console.log("JWT token",token);
    if (!token)res.status(401).send('No token provided');

    try{
        const payload =jwt.verify(token as string,process.env.SECRET_KEY as Secret)as {email:string,iat:number};
        console.log("signIn user email : ",payload.email);
        next();
    }catch (err){
        console.log("error  : ", err);
        res.status(401).send(err)
    }
}
