import {UserDTO} from "../DTO/UserDTO";

class UserController{
    async signIn(req:any,resp:any){
        const email =req.body.email;
        const pw  =req.body.password;

        const user:UserDTO ={email,pw}

        try{
            const verified =

        }catch (err){
            resp.status(401).json("UnAuthorized user..")
        }

    }

    async signUp(req:any,resp:any){


    }
}
export default UserController;