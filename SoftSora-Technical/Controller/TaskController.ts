import {deleteTask, getAllFromSignedINUser, saveTask, updateTask} from "../Service/TaskService";
import {TaskDTO} from "../DTO/TaskDTO";
import jwt, {Secret} from "jsonwebtoken";

class TaskController{
    async addTask(req:any ,resp:any){
        const data:TaskDTO  =req.body;
        console.log(data)
            try{
                const authHeader = req.headers.authorization;

                if (!authHeader || !authHeader.startsWith('Bearer ')) {
                    return resp.status(401).send("Access token missing or malformed.");
                }

                const token = authHeader.split(' ')[1];
                const decoded = jwt.verify(token, process.env.SECRET_KEY as Secret) as { email: string };

                const userEmail = decoded.email;
                console.log("SignedIn User email",userEmail)


                 await saveTask(data,userEmail);
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
        const id =parseInt(req.query['id'])
        const taskDto:TaskDTO =req.body
        try{
            await updateTask(id,taskDto);
            resp.status(200).json("Updated...")

        }catch (err){
            resp.status(500).send("Couldn't update ... Try again..")
        }
    }



    async getAllTasksOfSignedINUser(req:any,resp:any){
        try {
            const authHeader = req.headers.authorization;

            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                return resp.status(401).send("Access token missing or malformed.");
            }

            const token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, process.env.SECRET_KEY as Secret) as { email: string };

            const userEmail = decoded.email;
            console.log("SignedIn User email",userEmail)

            const all = await getAllFromSignedINUser(userEmail);

            resp.json(all);
        } catch (err) {
            console.error(err);
            resp.status(403).send("Invalid or expired token.");
        }
    }


}
export default TaskController;