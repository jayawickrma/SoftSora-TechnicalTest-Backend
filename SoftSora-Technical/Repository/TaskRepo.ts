import TaskSchema from "../Model/TaskModel";
import {TaskDTO} from "../DTO/TaskDTO";


    export async function SaveTask(task:TaskDTO) {
        try {
            let taskToSave = new TaskSchema(task);
            const savedTask = taskToSave.save();
            return "Task Saved! " + JSON.stringify(savedTask);
        } catch (err) {
            console.log(err)

        }
    }

    export async function DeleteTask(taskID:String){
        try{
            const  deleteTask =await TaskSchema.findOneAndDelete(
                {taskId :taskID}
            )
            return deleteTask;
        }catch (err){
            console.log(err);
            throw err;
        }
    }

    export async function UpdateTask(taskId:string ,taskDTO:TaskDTO){
        try{
            const checkId =await TaskSchema.findOne({
                taskId:taskId
            })

            if (checkId){
                const updatedTask =await TaskSchema.findOneAndUpdate(
                    {taskId :taskId},
                    {$set :taskDTO},
                    {new :true}
                )
                return updatedTask
            }
        }catch (err){
            console.log(err);
            throw err;
        }
    }


    export async function generateTaskId() {
        try {
            const tasks = await TaskSchema.find({});
            if (tasks.length > 0) {
                let lastTaskId = tasks[tasks.length - 1].taskId;
                if (lastTaskId) {
                    // @ts-ignore
                    const number = +lastTaskId.split('-')[1];
                    const newNumber = number + 1;
                    return `TASK-${newNumber}`
                } else {
                    throw new Error("Cant generate Id");
                }
            } else {
                return "TASK-1";
            }
        } catch (err) {
            throw err;
        }
    }