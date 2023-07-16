import sequelize from "./database.js";
import { Role, User } from "../Models/Models.js";
import authService from "../Services/authService.js";
import bcrypt from "bcryptjs";
export default async function (){
    await sequelize.sync({force: false}).then(() => {console.log("Database is synchronized")});

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
        const adminPassword = await bcrypt.hashSync("admin", 5);
        await User.create({
            
            name: "admin", 
            email: "admin@admin.admin", 
            password: adminPassword,
            RoleId: roleAdmin.id
        });
    }
}