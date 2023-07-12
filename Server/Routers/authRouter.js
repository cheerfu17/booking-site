import { Router } from "express";
import authController from "../Controllers/authController.js";
import authMiddleWare from "../Middlewares/authMiddleWare.js";
const authRouter = new Router();

authRouter.post("/auth/sign_up", authController.signUp);
authRouter.post("/auth/sign_in", authController.signIn);
authRouter.post("/auth/check", authMiddleWare, authController.check);
export default authRouter;