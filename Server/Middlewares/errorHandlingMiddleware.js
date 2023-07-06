import apiError from "../Errors/apiError.js"

export default function (error, req, res, next){
    if (err instanceof apiError){
        return res.status(err.status).json({message: error.message});
    }
    return res.status(500).json({"message": "Unexpected error"});
}