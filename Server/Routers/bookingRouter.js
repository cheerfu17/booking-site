import { Router } from "express";
import bookingController from "../Controllers/bookingController.js";
const bookingRouter = new Router();

bookingRouter.get("/booking", bookingController.get);
bookingRouter.get("/booking/:id", bookingController.getOne);
bookingRouter.post("/booking", bookingController.create);
bookingRouter.put("/booking/:id", bookingController.patch);
bookingRouter.delete("/booking/:id", bookingController.delete);

export default bookingRouter;
