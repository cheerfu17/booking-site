import { Router } from "express";
import userController from "../Controllers/userController.js";
import roleMiddleware from "../Middlewares/roleMiddleware.js";

const userRouter = new Router();

userRouter.post("/user", roleMiddleware([]), userController.create);
userRouter.get("/user", roleMiddleware(["ADMIN", "USER"]), userController.getAll);
userRouter.get("/user/:id", userController.getOne);
userRouter.put("/user/:id", roleMiddleware(["ADMIN", "USER"]), userController.edit);
userRouter.delete("/user/:id", roleMiddleware(["ADMIN"]), userController.delete);

export default userRouter;