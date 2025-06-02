import {UserDTO} from "../DTO/UserDTO";
import UserSchema from "../Model/UserModel";
import bcrypt from 'bcrypt'
import {UserSignUp} from "../Repository/UserRepo";

    export async function finsByEmail(verifyUser:UserDTO){
        try{
            const findEmail = await UserSchema.findOne({
                email:verifyUser.email
            });
            if (findEmail){
                return "User Already Exit..."
            }
        }catch (err){
            console.log(err);
            throw err
        }
    }

    export async function createUser(user:UserDTO){
        const hashedPw =await bcrypt.hash(user.password,10)
        try{
            user.password =hashedPw;
            await UserSignUp(user)
        }catch (err){
            console.log(err);
            throw err;
        }
    }