import mongoose from 'mongoose'

const taskSchema =new mongoose.Schema({
    id :{type:Number ,required:true ,unique:true ,autoIncrement:true},
    title:String,
    description:String,
    priority:String,
    status:String,
    dueDate:Date
})

const TaskSchema =mongoose.model('task',taskSchema);
export default TaskSchema;