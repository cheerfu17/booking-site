import { where } from "sequelize";
import { Division } from "../Models/Models.js";

class divisionService{
    async create(newDivision){
        const division = await Division.findOne({where: {name: newDivision.name}});
        if (division) throw new Error("Division with this name alredy exist");
        return await Division.create(newDivision);
    }

    async getAll(){
        const divisions = await Division.findAll();
        return divisions;
    }

    async getOne(id){
        const division = await Division.findByPk(id);
        if (!division) throw new Error("Division not found");
        return division;
    }   

    async edit(id,data){
        const division = await Division.findByPk(id);
        if (!division) throw new Error("Division not found");
        return await division.update(data);
    }

    async delete(id){
        const division = await Division.findByPk(id);
        if (!division) throw new Error("Division not found");
        await division.destroy();
        return {"message": "Division has been deleted"};
    }

}

export default new divisionService;