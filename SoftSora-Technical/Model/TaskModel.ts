import mongoose from 'mongoose'


const taskSchema = new mongoose.Schema({
    taskId:String,
    title:String,
    description:String,
    priority:String,
    status:String,
    dueDate:Date,
    createdAt:Date,
    userEmail:String
})

const TaskSchema =mongoose.model('Task',taskSchema);
export default TaskSchema;
