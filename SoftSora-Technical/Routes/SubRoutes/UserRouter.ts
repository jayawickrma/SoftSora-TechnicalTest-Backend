import {Router} from "express";
import UserController from "../../Controller/UserController";

class UserRouter{
        router:Router;
        userController:UserController

    constructor() {
            this.router=Router();
            this.userController =new UserController();
            this.initialStates();
    }
    initialStates():void{
            this.router.post('/signIn',this.userController.signIn)
            this.router.post('/signUp',this.userController.signUp)
            this.router.post("/refreshToken",this.userController.refreshToken)
    }
}
const userRoutes:UserRouter =new UserRouter();
export default userRoutes;