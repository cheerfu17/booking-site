import { Hall } from "../Models/Models.js";

class hallService{
    async get(){
        const Halls = await Hall.findAll();
        return Halls;
    }

    async getOne(id){
        const hall = await Hall.findByPk(id);
        if (!hall) throw new Error("Hall not found");
        return hall;
    }

    async create(newHall){
        return await Hall.create(newHall); 
    }

    async patch(id, data){
        const hall = await Hall.findByPk(id);
        if (!hall) throw new Error("Hall not found");
        return hall.update(data);
    }

    async delete(id){
        const hall = await Hall.findByPk(id);
        if (!hall) throw new Error("Hall not found");
        hall.destroy();
        return {"message": "Hall has been deleted"} 
    }
}

export default new hallService();