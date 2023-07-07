import hallService from "../Services/hallService.js";

class hallController{
    async create(req, res){
        try {
            const hall = await hallService.create(req.body);
            return res.json(hall);
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }
    async getAll(req, res){
        try {
            const hall = await hallService.getAll();
            return res.json(hall);
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }
    async getOne(req, res){
        try {
            const hall = await hallService.getOne(req.params.id);
            return res.json(hall);
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }
    async update(req, res){
        try {
            const hall = await hallService.update(req.params.id, req.body);
            return res.json(hall);
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }    
    async delete(req, res){
        try {
            const hall = await hallService.delete(req.params.id);
            return res.json(hall);
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }
}

export default new hallController;