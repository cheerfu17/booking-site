import { Router } from "express";
import hallController from "../Controllers/hallController.js";
const hallRouter = new Router();

hallRouter.get("/hall", hallController.get);
hallRouter.get("/hall/:id", hallController.getOne);
hallRouter.post("/hall", hallController.create);
hallRouter.put("/hall/:id", hallController.patch);
hallRouter.delete("/hall/:id", hallController.delete);

export default hallRouter;