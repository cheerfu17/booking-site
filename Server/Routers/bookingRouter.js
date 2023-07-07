import { Router } from "express";
import bookingController from "../Controllers/bookingController.js";
import authMiddleWare from "../Middlewares/authMiddleWare.js";

const bookingRouter = new Router();

bookingRouter.get("/booking", bookingController.get);
bookingRouter.get("/booking/:id", bookingController.getOne);
bookingRouter.post("/booking", authMiddleWare, bookingController.create);
bookingRouter.put("/booking/:id", authMiddleWare, bookingController.patch);
bookingRouter.delete("/booking/:id", authMiddleWare, bookingController.delete);

export default bookingRouter;
