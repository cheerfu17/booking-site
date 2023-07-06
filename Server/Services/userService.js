import { User } from "../Models/Models.js";
import apiError from "../Errors/apiError.js";

class userService{
    async create(newUser){
        const user = await User.findOne({where: {email: newUser.email}});
        if (user) throw apiError.badRequest("User with this email is already registered");
        return await User.create(newUser); 
    }
    async getAll(){
        const users = await User.findAll({attributes: ["id", "name", "email"]});
        if (!users.length) throw apiError.notFound("Users not found");
        return users;
    }
    async getOne(id){
        const user = await User.findByPk(id, {attributes: ["id", "name", "email"]});
        if (!user) throw apiError.notFound("User not found");
        return user;
    }
    async edit(id,data){
        const user = await User.findByPk(id);
        if (!user) throw apiError.notFound("User not found");
        return await user.update(data);
    }
    async delete(id){
        const user = await User.findByPk(id);
        if (!user) throw apiError.notFound("User not found");
        await user.destroy();
        return {"message": "User has been deleted"} 
    }
}

export default new userService;