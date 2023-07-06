import { Router } from "express";
const bookingRouter = new Router();

bookingRouter.get("/booking", (req, res) => {res.json("GET booking")});
bookingRouter.get("/booking/:id", (req, res) => {res.json("GET id booking")});
bookingRouter.post("/booking", (req, res) => {res.json("POST booking")});
bookingRouter.put("/booking/:id", (req, res) => {res.json("PUT booking")});
bookingRouter.delete("/booking/:id", (req, res) => {res.json("DELETE booking")});

export default bookingRouter;
