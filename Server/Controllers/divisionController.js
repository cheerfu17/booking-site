import divisionService from "../Services/divisionService.js";

class divisionController{
    async get(req, res){
        try {
            return res.json(await divisionService.get());
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }

    async getOne(req, res){
        try {
            return res.json(await divisionService.getOne(req.params.id));
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }

    async create(req, res){
        try {
            return res.json(await divisionService.create(req.body));            
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }

    async patch(req, res){
        try {
            return res.json(await divisionService.patch(req.params.id, req.body));
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }

    async delete(req, res){
        try {
            return res.json(await divisionService.delete(req.params.id));
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }
}

export default new divisionController();