import userService from "../Services/userService.js";

class userController{
    async create(req, res){
        try {
            const user = await userService.create(req.body);
            return res.json(user);
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }
    async getAll(req, res){
        try{
            const user = await userService.getAll();
            return res.json(user);
        }catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }
    async getOne(req, res){
        try{
            const user = await userService.getOne(req.params.id);
            return res.json(user);
        }catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }
    async edit(req, res){
        try{
            const user = await userService.edit(req.params.id, req.body);
            return res.json(user);
        }catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }
    async delete(req, res){
        try{
            const user = await userService.delete(req.params.id);
            return res.json(user);
        }catch (error) {
            res.status(500).json({"error": error.message});  
        }
    }
}

export default new userController;