import { Role, User } from "../Models/Models.js";
import apiError from "../Errors/apiError.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (id, name, email, role) => {
    const payload = {
        id,
        name,
        email,
        role
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY || "SECRET_KEY", {expiresIn: "24h"});
    return token;
}

class authService{
    async signUp(data){
        const candidate = await User.findOne({where: {email: data.email}});        
        if (candidate) throw apiError.badRequest("User with this email address already exists");
        const hashPassword = await bcrypt.hashSync(data.password, 5);
        const userRole = await Role.findOne({where: {"name": "USER"}});
        const newUser = await User.create({
            "name": data.name, 
            "email": data.email, 
            "password": hashPassword, 
            "RoleId": userRole.id});
        return generateToken(newUser.id, newUser.name, newUser.email, userRole.name);
    }

    async signIn(data){
        const user = await User.findOne({where: {email: data.email}});
        if (!user) throw apiError.notFound("User with this email was not found");
        const validPassword = bcrypt.compareSync(data.password, user.password);
        if (!validPassword) throw apiError.badRequest("Incorrect password");
        const role = await Role.findByPk(user.RoleId);
        const token = generateToken(user.id, user.name, user.email, role.name);
        return token;
    }

    async check(user){
        const token = generateToken(user.id, user.name, user.email, user.role);
        return token;
    }
}

export default new authService();