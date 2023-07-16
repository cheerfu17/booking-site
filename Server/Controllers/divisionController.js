import divisionService from "../Services/divisionService.js";

class divisionController{
    async get(req, res, next){
        try {
            return res.json(await divisionService.get());
        } catch (error) {
            next(error);

        }
    }

    async getOne(req, res, next){
        try {
            return res.json(await divisionService.getOne(req.params.id));
        } catch (error) {
            next(error); 
        }
    }

    async create(req, res, next){
        try {
            return res.json(await divisionService.create(req.body));            
        } catch (error) {
            next(error);
        }
    }

    async patch(req, res, next){
        try {
            return res.json(await divisionService.patch(req.params.id, req.body));
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next){
        try {
            return res.json(await divisionService.delete(req.params.id));
        } catch (error) {
            next(error);
        }
    }
}

export default new divisionController();