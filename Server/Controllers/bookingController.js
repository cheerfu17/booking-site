import bookingService from "../Services/bookingService.js";

class bookingController{
    async get(req, res, next){
        try {
            return res.json(await bookingService.get());
        } catch (error) {
            next(error); 
        }
    }

    async getOne(req, res, next){
        try {
            return res.json(await bookingService.getOne(req.params.id));
        } catch (error) {
            next(error); 
        }
    }

    async create(req, res, next){
        try {
            req.body.UserId = req.user.id;
            return res.json(await bookingService.create(req.body));
        } catch (error) {
            console.log(error.message);
            next(error); 
        }
    }

    async patch(req, res, next){
        try {
            req.body.UserId = req.user.id;
            return res.json(await bookingService.patch(req.params.id, req.body, req.user));
        } catch (error) {
            next(error); 
        }
    }

    async delete(req, res, next){
        try {
            req.body.UserId = req.user.id;
            return res.json(await bookingService.delete(req.params.id, req.user));
        } catch (error) {
            next(error); 
        }
    }
}

export default new bookingController();