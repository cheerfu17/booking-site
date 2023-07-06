import "dotenv/config";
import express from "express";
import sequelize from "./database.js";
import apiRouter from "./Routers/apiRouter.js";
import errorHandlingMiddleware from "./Middlewares/errorHandlingMiddleware.js";

const PORT = process.env.PORT || 5050;
const app = express();
app.use(express.json());
app.use("/", apiRouter);
app.get("/", (req, res) => {res.json("Welcome page")});
app.use(errorHandlingMiddleware);

function startServer(){
    try {
        sequelize.sync({force: true}).then(() => {console.log("Database is synchronized")});
        app.listen(PORT, () => console.log(`The server is listening on port ${PORT}"`));
    } catch (error) {
        console.log(error);        
    }
}

startServer()