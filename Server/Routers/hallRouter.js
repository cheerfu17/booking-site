import {Router} from "express"
import hallController from "../Controllers/hallController.js";

const hallRouter = new Router()

hallRouter.get("/hall", hallController.getAll);
hallRouter.post("/hall", hallController.create);
hallRouter.get("/hall/:id", hallController.getOne);
hallRouter.put("/hall/:id", hallController.update);
hallRouter.delete("/hall/:id", hallController.delete);

export default hallRouter;