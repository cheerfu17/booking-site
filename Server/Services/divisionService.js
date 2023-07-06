import { Division } from "../Models/Models.js";

class divisionService{
    async get(){
        const divisions = await Division.findAll();
        if (!divisions.length) throw new Error("No one division found");
        return divisions; 
    }

    async getOne(id){
        const division = await Division.findByPk(id);
        if (!division) throw new Error("Division not found");
        return division;
    }

    async create(data){
        const division = await Division.create(data);
        return division;
    }

    async patch(id, data){
        const division = await Division.findByPk(id);
        if (!division) throw new Error("Division not found");
        return division.update(data); 
    }

    async delete(id){
        const division = await Division.findByPk(id);
        if (!division) throw new Error("Division not found");
        division.destroy();
        return {"message": "Division has been deleted"}
    }
}

export default new divisionService();