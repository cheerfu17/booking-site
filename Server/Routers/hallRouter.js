import { Router } from "express";
const hallRouter = new Router();

hallRouter.get("/hall", (req, res) => {res.status(200)});
hallRouter.get("/hall/:id", (req, res) => {res.status(200)});
hallRouter.post("/hall", (req, res) => {res.status(200)});
hallRouter.put("/hall/:id", (req, res) => {res.status(200)});
hallRouter.delete("/hall/:id", (req, res) => {res.status(200)});

export default hallRouter;