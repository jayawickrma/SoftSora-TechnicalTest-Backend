import {Router} from "express";
import userRoutes from "./SubRoutes/UserRouter";
import userRouter from "./SubRoutes/UserRouter";
import taskRouter from "./SubRoutes/taskRouter";
import {authenticateToken} from "../Middleware/AuthenticateUser";

class MainRouter{
        router :Router;

        constructor() {
            this.router =Router();
            this.router.use('/auth',userRoutes.router);
            this.router.use('/task',authenticateToken,taskRouter.router);
        }
}
const mainRouter:MainRouter =new MainRouter();
export default mainRouter;