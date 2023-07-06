import divisionService from "../Services/divisionService.js";

class divisionController {
    async create(req, res){
        try{
            const division = await divisionService.create(req.body);
            return res.json(division);
        }catch(error){
            res.status(500).json({"error": error.message});
        }
    }

    async getAll(req,res){
        try{
            const division = await divisionService.getAll();
            return res.json(division);
        }catch(error){
            res.status(500).json({"error": error.message});
        }
    }

    async getOne(req,res){
        try{
            const division = await divisionService.getOne(req.params.id);
            return res.json(division);
        }catch(error){
            res.status(500).json({"error": error.message});
        }
    }
    async delete(req,res){
        try{
            const division = await divisionService.delete(req.params.id);
            return res.json(division);
        }catch(error){
            res.status(500).json({"error": error.message});
        }
    }

    async edit(req,res){
        try{
            const division = await divisionService.edit(req.params.id, req.body);
            return res.json(division);
        }catch (error){
            res.status(500).json({"error": error.message});
        }
    }

}

export default new divisionController;