import { Router } from "express";
const authRouter = new Router();

authRouter.post("/auth/sign_up", (req, res) => {res.json("Sign up endpoint")});
authRouter.post("/auth/sign_in", (req, res) => {res.json("Sign in endpoint")});

export default authRouter;