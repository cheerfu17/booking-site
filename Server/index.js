import "dotenv/config";
import express from "express";
import sequelize from "./database.js";
import UserRouter from "./Router/UserRouter.js";
import DivisionRouter from "./Router/DivisionRouter.js";

const PORT = process.env.PORT || 5055;
const app = express();

app.use('/api', UserRouter)
app.use('/api', DivisionRouter)

app.get("/", (req, res) => {res.json("Welcome page")});


function startServer(){
    try {
        sequelize.sync().then(() => {console.log("Database is synchronized")});
        app.listen(PORT, () => console.log(`The server is listening on port ${PORT}"`));
    } catch (error) {
        console.log(error);        
    }
}

startServer()