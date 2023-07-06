import bookingService from "../Services/bookingService.js";

class bookingController{
    async get(req, res){
        try {
            return res.json(await bookingService.get());
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }

    async getOne(req, res){
        try {
            return res.json(await bookingService.getOne(req.params.id));
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }

    async create(req, res){
        try {
            return res.json(await bookingService.create(req.body));
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }

    async patch(req, res){
        try {
            return res.json(await bookingService.patch(req.params.id, req.body));
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }

    async delete(req, res){
        try {
            return res.json(await bookingService.delete(req.params.id));
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }
}

export default new bookingController();