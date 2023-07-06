import apiError from "../Errors/apiError.js"

export default function (error, req, res, next){
    if (error instanceof apiError){
        return res.status(error.status).json({message: error.message});
    }
    return res.status(500).json({"message": "Unexpected error"});
}