import "dotenv/config";
import express from "express";
import apiRouter from "./Routers/apiRouter.js";
import errorHandlingMiddleware from "./Middlewares/errorHandlingMiddleware.js";
import initDb from "./Database/initDb.js";
import cors from "cors";
const PORT = process.env.PORT || 5050;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", apiRouter);
app.get("/", (req, res) => {res.json("Welcome page")});
app.use(errorHandlingMiddleware);

function startServer(){
    try {
        initDb();
        app.listen(PORT, () => console.log(`The server is listening on port ${PORT}"`));
    } catch (error) {
        console.log(error);        
    }
}

startServer()