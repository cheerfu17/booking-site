import "dotenv/config";
import express from "express";
import sequelize from "./database.js";
import divisionRouter from "./Routers/dvisionRouter.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use('/api', divisionRouter);

app.get("/", (req, res) => {res.json("Welcome page")});


function startServer(){
    try {
        sequelize.sync({force: true}).then(() => {console.log("Database is synchronized")});
        app.listen(PORT, () => console.log(`The server is listening on port ${PORT}"`));
    } catch (error) {
        console.log(error);        
    }
}

startServer()