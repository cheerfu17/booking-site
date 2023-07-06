import userService from "../Services/userService.js";

class userController{
    async create(req, res, next){
        try {
            const user = await userService.create(req.body);
            return res.json(user);
        } catch (error) {
            next(error);
        }
    }
    async getAll(req, res, next){
        try{
            const user = await userService.getAll();
            return res.json(user);
        }catch (error) {
            next(error);
        }
    }
    async getOne(req, res, next){
        try{
            const user = await userService.getOne(req.params.id);
            return res.json(user);
        }catch (error) {
            next(error);
        }
    }
    async edit(req, res, next){
        try{
            const user = await userService.edit(req.params.id, req.body);
            return res.json(user);
        }catch (error) {
            next(error);
        }
    }
    async delete(req, res, next){
        try{
            const user = await userService.delete(req.params.id);
            return res.json(user);
        }catch (error) {
            next(error);
        }
    }
}

export default new userController;