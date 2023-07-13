import bookingService from "../Services/bookingService.js";

class bookingController{
    async create(req, res){
        try {
            const booking = await bookingService.create(req.body);
            return res.json(booking);
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }
    async getAll(req, res){
        try {
            const booking = await bookingService.getAll();
            return res.json(booking);
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }
    async getOne(req, res){
        try {
            const booking = await bookingService.getOne(req.params.id);
            return res.json(booking);
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }
    async update(req, res){
        try {
            const booking = await bookingService.update(req.params.id, req.body);
            return res.json(booking);
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }    
    async delete(req, res){
        try {
            const booking = await bookingService.delete(req.params.id);
            return res.json(booking);
        } catch (error) {
            res.status(500).json({"error": error.message}); 
        }
    }
}

export default new bookingController();