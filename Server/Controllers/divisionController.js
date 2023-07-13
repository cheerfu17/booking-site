import divisionService from "../Services/divisionService.js";

class divisionController {
    async create(req, res, next){
        try{
            const division = await divisionService.create(req.body);
            return res.json(division);
        }catch(error){
            console.log(error.message);
            next(error);
        }
    }

    async getAll(req,res, next){
        try{
            const division = await divisionService.getAll();
            return res.json(division);
        }catch(error){
            console.log(error.message);
            next(error);
        }
    }

    async getOne(req,res, next){
        try{
            const division = await divisionService.getOne(req.params.id);
            return res.json(division);
        }catch(error){
            console.log(error.message);
            next(error);
        }
    }
    async delete(req,res, next){
        try{
            const division = await divisionService.delete(req.params.id);
            return res.json(division);
        }catch(error){
            console.log(error.message);
            next(error);
        }
    }

    async edit(req,res, next){
        try{
            const division = await divisionService.edit(req.params.id, req.body);
            return res.json(division);
        }catch (error){
            console.log(error.message);
            next(error);
        }
    }

}

export default new divisionController;