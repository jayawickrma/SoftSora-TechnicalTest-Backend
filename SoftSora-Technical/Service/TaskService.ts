import {TaskDTO} from "../DTO/TaskDTO";
import TaskSchema from "../Model/TaskModel";
import {DeleteTask, generateTaskId,  SaveTask, UpdateTask} from "../Repository/TaskRepo";



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




    export async function updateTask(taskId:string,taskDTO:TaskDTO){
            try{
                await UpdateTask(taskId,taskDTO);
                return "Updated Successfully!!"
            }
            catch (err){
                console.log(err);
                throw err;
            }
    }




    export async function getAllFromSignedINUser(email:string){
        try{
            const getall = await TaskSchema.find({
                userEmail :email
            })
            return getall;
        }catch (err){
            console.log(err);
            throw err
        }
}