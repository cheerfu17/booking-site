import authService from "../Services/authService.js";

class authController{
    async signUp(req, res){
        try {
            const user = await authService.signUp(req.body);
            return res.json(user);
        } catch (error) {
            res.status(500).json({"error": error.message});
        }
    }
    async signIn(req, res){
        try {
            const token = await authService.signIn(req.body); 
            return res.json(token);
        } catch (error) {
            res.status(500).json({"error": error.message});
        }
    }
}

export default new authController();