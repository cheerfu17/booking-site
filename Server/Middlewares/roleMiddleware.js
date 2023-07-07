import jwt from "jsonwebtoken";

export default function (roles){
    return function(req, res, next){
        if (req.method === "OPTIONS"){
            next();
        }
    
        try {
            const token = req.headers.authorization.split(" ")[1];
            if (!token){
                return res.status(403).json({message: "User not autherizated"})
            }
            const decodedData = jwt.verify(token, process.env.SECRET_KEY || "SECRET_KEY");
            
            console.log(decodedData.role);
            if (!roles.includes(decodedData.role)){
                return res.status(403).json({message: "Access denied"})
            }

            next();
    
        } catch (error) {
            console.log(error.message);
            return res.status(403).json({message: "User not autherizated"})
        }
    }
}