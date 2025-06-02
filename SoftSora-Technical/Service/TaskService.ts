import {TaskDTO} from "../DTO/TaskDTO";
import TaskSchema from "../Model/TaskModel";
import {DeleteTask, generateTaskId, SaveTask} from "../Repository/TaskRepo";



    export async function saveTask(taskDTO:TaskDTO,email:string) {
        try {
            taskDTO.userEmail =email;
            taskDTO.taskId =await generateTaskId();
            await SaveTask(taskDTO);

        } catch (err) {
            console.log(err)
            throw err;
        }
    }




    export async function deleteTask(id:string){
        const taskID =id
        try{
            await DeleteTask(id)
            return "Deleted Successfully" +id
        }catch (err){
            console.log(err);
            throw err;
        }
    }




    export async function updateTask(taskId:number,taskDTO:TaskDTO){
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




    export async function getAllFromSignedINUser(email:string){
       const userEmail =email;
            try{
                return await TaskSchema.find({
                    email :userEmail
                })
            }catch (err){
                console.log(err);
                throw err
            }
}