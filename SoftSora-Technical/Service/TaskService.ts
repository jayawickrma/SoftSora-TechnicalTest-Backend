import {TaskDTO} from "../DTO/TaskDTO";
import TaskSchema from "../Model/TaskModel";



    export async function saveTask(taskDTO:TaskDTO,email:string) {
        try {
            taskDTO.userEmail =email;
            let taskToSave = new TaskSchema(taskDTO);
            const savedTask =  taskToSave.save();
            return "Task Saved! " + JSON.stringify(savedTask);
        } catch (err) {
            console.log(err)
            throw err;
        }
    }




    export async function deleteTask(id:number){
        try{
            const  deleteTask =await TaskSchema.findByIdAndDelete(
                {_id :id}
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
                    _id:id
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