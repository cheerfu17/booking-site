import { User } from "../Models/Models.js";
import apiError from "../Errors/apiError.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (id, name, email) => {
    const payload = {
        id,
        name,
        email
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY || "SECRET_KEY", {expiresIn: "24h"});
    return token;
}

class authService{
    async signUp(data){
        const candidate = await User.findOne({where: {email: data.email}});
        
        if (candidate) throw apiError.badRequest("User with this email address already exists");
        const hashPassword = await bcrypt.hashSync(data.password, 5);
        const newUser = await User.create({"name": data.name, "email": data.email, "password": hashPassword});
        return newUser;
    }

    async signIn(data){
        const user = await User.findOne({where: {email: data.email}});
        if (!user) throw apiError.notFound("User with this email was not found");
        const validPassword = bcrypt.compareSync(data.password, user.password);
        if (!validPassword) throw apiError.badRequest("Incorrect password");
        const token = generateToken(user.id, user.name, user.email);
        return token;
    }
}

export default new authService();