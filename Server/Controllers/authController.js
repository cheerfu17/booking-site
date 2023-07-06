import authService from "../Services/authService.js";

class authController{
    async signUp(req, res, next){
        try {
            const user = await authService.signUp(req.body);
            return res.json(user);
        } catch (error) {
            next(error);
        }
    }
    async signIn(req, res, next){
        try {
            const token = await authService.signIn(req.body); 
            return res.json(token);
        } catch (error) {
            next(error);
        }
    }
}

export default new authController();