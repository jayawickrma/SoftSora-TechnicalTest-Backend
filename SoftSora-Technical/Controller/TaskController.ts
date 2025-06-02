import {deleteTask, getAllFromSignedINUser, saveTask, updateTask} from "../Service/TaskService";
import {TaskDTO} from "../DTO/TaskDTO";
import jwt, {Secret} from "jsonwebtoken";

class TaskController{
    async addTask(req:any ,resp:any){
        const data:TaskDTO  =req.body;
        console.log(data)
        const userEmail =req.body.email
            try{
                 await saveTask(data,userEmail);
                 resp.status(201).json(data);
            }catch (err){
                resp.status(500).json("Something went wrong when adding task..Try again.");
                console.log(err);
            }
    }



    async deleteTask(req:any,resp:any){
        const id  =req.query['id'];
        try{
            await deleteTask(id);
            resp.status(201).json("Deleted..!")
        }catch (err){
            resp.status(500).json("Can not delete this ....")
        }
    }



    async updateTask(req:any, resp:any){
        const id =req.query['id'];
        const taskDto:TaskDTO =req.body
        try{
            await updateTask(id,taskDto);
            resp.status(200).json("Updated...")

        }catch (err){
            resp.status(500).send("Couldn't update ... Try again..")
        }
    }



    async getAllTasksOfSignedINUser(req:any,resp:any){

        const userEmail =req.body.email
        try {
            const all = await getAllFromSignedINUser(userEmail);
            resp.json(all);
        } catch (err) {
            console.error(err);
            resp.status(403).send("Invalid or expired token.");
        }
    }


}
export default TaskController;