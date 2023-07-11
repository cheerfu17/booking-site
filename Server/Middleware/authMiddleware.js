import jwt from "jsonwebtoken";

export default function (req, res, next){
    if(req.method === "OPTIONS"){
        next();
    }

    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token){
            return res.status(403).json({"message": "Не авторизован"});
        }
    
        const data = jwt.verify(token, process.env.SECRET_KEY || "SECRET_KEY");
        req.user = data;
        next();
    } catch (error) {
        console.log(error);
        res.status(403).json({"message": "Не авторизован"});
    }
}