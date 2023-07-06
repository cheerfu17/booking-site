import { Division } from "../Models/Models.js";
import apiError from "../Errors/apiError.js";
class divisionService{
    async get(){
        const divisions = await Division.findAll();
        if (!divisions.length) throw apiError.notFound("No one division found");
        return divisions; 
    }

    async getOne(id){
        const division = await Division.findByPk(id);
        if (!division) throw apiError.notFound("Division not found");
        return division;
    }

    async create(data){
        const division = await Division.create(data);
        return division;
    }

    async patch(id, data){
        const division = await Division.findByPk(id);
        if (!division) throw apiError.notFound("Division not found");
        return division.update(data); 
    }

    async delete(id){
        const division = await Division.findByPk(id);
        if (!division) throw apiError.notFound("Division not found");
        division.destroy();
        return {"message": "Division has been deleted"}
    }
}

export default new divisionService();