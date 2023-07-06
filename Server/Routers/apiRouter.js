import divisionRouter from "./divisionRouter.js";
import authRouter from "./authRouter.js"
import userRouter from "./userRouter.js"
import hallRouter from "./hallRouter.js"
import bookingRouter from "./bookingRouter.js"
import { Router } from "express";

const apiRouter = new Router();

apiRouter.use('/api', divisionRouter);
apiRouter.use('/api', authRouter);
apiRouter.use('/api', userRouter);
apiRouter.use("/api", hallRouter);
apiRouter.use("/api", bookingRouter);

export default apiRouter;