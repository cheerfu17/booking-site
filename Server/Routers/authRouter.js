import { Router } from "express";
import authController from "../Controllers/authController.js";
const authRouter = new Router();

authRouter.post("/auth/sign_up", authController.signUp);
authRouter.post("/auth/sign_in", authController.signIn);

export default authRouter;