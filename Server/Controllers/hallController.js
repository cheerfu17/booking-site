import hallService from "../Services/hallService.js";

class hallController{
    async get(req, res, next){
        try {
            const halls = await hallService.get();
            return res.json(halls);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next){
        try {
            const hall = await hallService.create(req.body);
            return res.json(hall);
        } catch (error) {
            next(error);
        }
    }

    async getOne(req, res, next){
        try {
            const hall = await hallService.getOne(req.params.id);
            return res.json(hall);
        } catch (error) {
            next(error);
        }
    }

    async patch(req, res, next){
        try {
            const hall = await hallService.patch(req.params.id, req.body);
            return res.json(hall);
        } catch (error) {
            next(error);
        }
    }
    
    async delete(req, res, next){
        try {
            const result = await hallService.delete(req.params.id);
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

export default new hallController;