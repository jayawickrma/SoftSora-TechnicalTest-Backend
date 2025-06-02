import {UserDTO} from "../DTO/UserDTO";
import UserSchema from "../Model/UserModel";


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
        try{
            let createUser =new UserSchema(user);
            const save  = await createUser.save();
            return save;
        }catch (err){
            console.log(err);
            throw err;
        }
    }