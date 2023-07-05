import { Router } from "express";
import userController from "../Controllers/userController.js";

const userRouter = new Router();

userRouter.post("/user",userController.create);
userRouter.get("/user", userController.getAll);
userRouter.get("/user/:id", userController.getOne);
userRouter.put("/user/:id", userController.edit);
userRouter.delete("/user/:id", userController.delete);

export default userRouter;