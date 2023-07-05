import { where } from "sequelize";
import { User } from "../Models/Models.js";

class userService{
    async create(newUser){
        const user = await User.findOne({where: {email: newUser.email}});
        if (user) throw new Error("User with this email already exist");
        return await User.create(newUser); 
    }
    async getAll(){
        const users = await User.findAll({attributes: ["id", "name", "email"]});
        return users;
    }
    async getOne(id){
        const user = await User.findByPk(id, {attributes: ["id", "name", "email"]});
        if (!user) throw new Error("User not found");
        return user;
    }
    async edit(id,data){
        const user = await User.findByPk(id);
        if (!user) throw new Error("User not found");
        return await user.update(data);
    }
    async delete(id){
        const user = await User.findByPk(id);
        if (!user) throw new Error("User not found");
        await user.destroy();
        return {"message": "User has been deleted"} 
    }
}

export default new userService;