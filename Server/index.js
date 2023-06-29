import "dotenv/config";
import express from "express";
const PORT = process.env.PORT || 5050;
const app = express();

app.get("/", (req, res) => {res.json("Welcome page")});

function startServer(){
    try {
        app.listen(PORT, () => console.log(`The server is listening on port ${PORT}"`));
    } catch (error) {
        console.log(error);        
    }
}

startServer()