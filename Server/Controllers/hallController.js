import hallService from "../Services/hallService.js";

class hallController{
    async get(req, res){
        try {
            const halls = await hallService.get();
            return res.json(halls);
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }

    async create(req, res){
        try {
            const hall = await hallService.create(req.body);
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

    async patch(req, res){
        try {
            const hall = await hallService.patch(req.params.id, req.body);
            return res.json(hall);
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }
    
    async delete(req, res){
        try {
            const result = await hallService.delete(req.params.id);
            return res.json(result);
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }
}

export default new hallController;