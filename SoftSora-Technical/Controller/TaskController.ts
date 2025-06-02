import {deleteTask, saveTask} from "../Service/TaskService";
import {TaskDTO} from "../DTO/TaskDTO";

class TaskController{
    async addTask(req:any ,resp:any){
        const data:TaskDTO  =req.body;
        console.log(data)
            try{
                await saveTask(data);
                 resp.status(201).json(data);
            }catch (err){
                resp.status(500).json("Something went wrong when adding task..Try again.");
                console.log(err);
            }
    }

    async deleteTask(req:any,resp:any){
        const id  =parseInt(req.query['id']);
        try{
            await deleteTask(id);
            resp.status(201).json("Deleted..!")
        }catch (err){
            resp.status(500).json("Can not delete this ....")
        }
    }

    async updateTask(req:any, resp:any){
        try{

        }catch (err){
            resp.status(500).send("Couldn't update ... Try again..")
        }
    }
    async getAllTasksOfSignedINUser(req:any,resp:any){
        try{

        }catch (err){
            resp.status(500).send("Couldn't load details..try again")
        }
    }
}
export default TaskController;