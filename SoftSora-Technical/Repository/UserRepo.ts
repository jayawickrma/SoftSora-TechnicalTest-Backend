import {UserDTO} from "../DTO/UserDTO";
import UserSchema from "../Model/UserModel";
import e from "express";


export async function UserSignUp(user:UserDTO){
    try{
        let createUser =new UserSchema(user);
        const save  = await createUser.save();
        return save;
    }catch (err){
        console.log(err);
        throw err;
    }
}
