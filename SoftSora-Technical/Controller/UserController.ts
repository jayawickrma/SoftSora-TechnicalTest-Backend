import {UserDTO} from "../DTO/UserDTO";
import {createUser, findByEmail} from "../Service/UserService";
import jwt, {Secret} from "jsonwebtoken";

class UserController{
    async signIn(req:any,resp:any){
        const email =req.body.email;
        const password  =req.body.password;
        const name = req.body.name

        const user:UserDTO = {email,password,name};
            const singedInUserEmail = req.body.email;
        try{
            const verified = await findByEmail(user);
            if (verified){
                const token =jwt.sign({email},process.env.SECRET_KEY as Secret,{expiresIn:"30m"});
                const refreshToken =jwt.sign({email},process.env.REFRESH_TOKEN as Secret,{expiresIn:"7d"});
                resp.json({accessToken:token,refreshToken:refreshToken});
            }

        }catch (err){
            resp.sendStatus(403).send("Invalid Credentials...")
        }

    }
    async signUp(req:any,resp:any){
        const user:UserDTO =req.body;

        try{
            await createUser(user);
            resp.status(201).json("User Account Created..." ,user)
        }catch (err){
            resp.status(401).json('UnAuthorized user and cant log into the System ..')
        }
    }


}
export default UserController;