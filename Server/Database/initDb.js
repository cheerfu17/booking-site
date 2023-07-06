import sequelize from "./database.js";
import { Role, User } from "../Models/Models.js";

export default async function (){
    await sequelize.sync({force: true}).then(() => {console.log("Database is synchronized")});

    const roles = await Role.findAll();
    if (!roles.length){
        Role.bulkCreate([
            {name: "USER"}, 
            {name: "ADMIN"}
        ]);
    }
    const roleAdmin = await Role.findOne({where: {name: "ADMIN"}});
    const user = await User.findOne({where: {RoleId: roleAdmin.id}});
    if (!user) {
        await User.create({
            name: "admin", 
            email: "admin@admin.admin", 
            password: "admin",
            RoleId: roleAdmin.id
        });
    }
}