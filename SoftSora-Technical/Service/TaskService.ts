import {TaskDTO} from "../DTO/TaskDTO";
import TaskSchema from "../Model/TaskModel";
import {generateTaskId, SaveTask} from "../Repository/TaskRepo";



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




    export async function deleteTask(id:number){
        try{
            const  deleteTask =await TaskSchema.findByIdAndDelete(
                {taskId :id}
            )
            return deleteTask;
        }catch (err){
            console.log(err);
            throw err;
        }
    }




    export async function updateTask(id:number,taskDTO:TaskDTO){
            try{
                const checkId =await TaskSchema.findOne({
                    taskId:id
                })

                if (checkId){
                    const updatedTask =await TaskSchema.findOneAndUpdate(
                        { _id :id},
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
                return await TaskSchema.findById({
                    email :userEmail
                })
            }catch (err){
                console.log(err);
                throw err
            }
}