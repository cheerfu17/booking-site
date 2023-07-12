import { Router } from "express";
import hallController from "../Controllers/hallController.js";
import roleMiddleware from "../Middlewares/roleMiddleware.js";
const hallRouter = new Router();

hallRouter.get("/hall", hallController.get);
hallRouter.get("/hall/:id", hallController.getOne);
hallRouter.post("/hall", roleMiddleware(["ADMIN", "USER"]), hallController.create);
hallRouter.put("/hall/:id", roleMiddleware(["ADMIN"]), hallController.patch);
hallRouter.delete("/hall/:id", roleMiddleware(["ADMIN"]), hallController.delete);

export default hallRouter;