import { where } from "sequelize";
import { Hall } from "../Models/Models.js";

class hallService{
    async create(newHall){
        const hall = await Hall.findOne({where: {name: newHall.name}});
        if (hall) throw new Error("Hall with this name already exist");
        return await Hall.create(newHall);; 
    }
    async getAll(){
        const halls = await Hall.findAll();
        return halls;
    }
    async getOne(id){
        const hall = await Hall.findByPk(id);
        if (!hall) throw new Error("Hall not found");
        return hall;
    }
    async update(id, data){
        const hall = await Hall.findByPk(id);
        if (!hall) throw new Error("Hall not found");
        return await hall.update(data);;
    }
    async delete(id){
        const hall = await Hall.findByPk(id);
        if (!hall) throw new Error("Hall not found");
        await hall.destroy();
        return {"message": "Hall has been deleted"} 
    }
}

export default new hallService;