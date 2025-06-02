import mongoose from 'mongoose'


const taskSchema = new mongoose.Schema({
    title:String,
    description:String,
    priority:String,
    status:String,
    dueDate:Date,
    createdAt:Date
})

const TaskModel =mongoose.model('Task',taskSchema);
export default TaskModel;
