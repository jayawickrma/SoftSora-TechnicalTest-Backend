import {Router} from "express";
import TaskController from "../../Controller/TaskController";

class TaskRouter{
        router:Router;
        taskController:TaskController;

    constructor() {
            this.router =Router();
            this.taskController = new TaskController();
            this.initialStates();
    }
    initialStates():void{
        this.router.post('/addTask',this.taskController.addTask);
        this.router.get('/getAllOfSignedInUser',this.taskController.getAllTasksOfSignedINUser);
        this.router.delete('/deleteTask',this.taskController.deleteTask);
        this.router.put('/updateTask',this.taskController.updateTask)
    }
}
const taskRouter:TaskRouter =new TaskRouter();
export default taskRouter;