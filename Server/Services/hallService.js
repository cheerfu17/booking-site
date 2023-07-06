import { Hall } from "../Models/Models.js";
import apiError from "../Errors/apiError.js";
class hallService{
    async get(){
        const halls = await Hall.findAll();
        if (!halls.length) throw apiError.notFound("Halls not found");
        return halls;
    }

    async getOne(id){
        const hall = await Hall.findByPk(id);
        if (!hall) throw apiError.notFound("Hall not found");
        return hall;
    }

    async create(newHall){
        return await Hall.create(newHall); 
    }

    async patch(id, data){
        const hall = await Hall.findByPk(id);
        if (!hall) throw apiError.notFound("Hall not found");
        return hall.update(data);
    }

    async delete(id){
        const hall = await Hall.findByPk(id);
        if (!hall) throw apiError.notFound("Hall not found");
        hall.destroy();
        return {"message": "Hall has been deleted"} 
    }
}

export default new hallService();