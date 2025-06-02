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




    export async function deleteTask(taskId:string){
        try{
            await DeleteTask(taskId)
            return "Deleted Successfully" +taskId
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
            try{
                const getall = await TaskSchema.find({
                    userEmail :email
                })

                console.log(getall)
                return getall;
            }catch (err){
                console.log(err);
                throw err
            }
}