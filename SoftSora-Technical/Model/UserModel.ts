import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email:{type:String ,required:true ,unique:true},
    name:String,
    password:String,
})

const UserSchema =mongoose.model('user',userSchema);
export default UserSchema;