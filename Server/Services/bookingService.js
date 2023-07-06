import { Booking } from "../Models/Models.js";
import apiError from "../Errors/apiError.js";
class bookingService{
    async get(){
        const bookings = await Booking.findAll();
        if (!bookings.length) throw apiError.notFound("Notes not found");
        return bookings;
    }

    async getOne(id){
        const note = await Booking.findByPk(id);
        if (!note) throw apiError.notFound("Note not found");
        return note;
    }

    async create(data){
        const note = await Booking.create(data);
        return note;
    }

    async patch(id, data){
        const note = await Booking.findByPk(id);
        if (!note) throw apiError.notFound("Note not found");
        return await note.update(data);
    }

    async delete(id){
        const note = await Booking.findByPk(id);
        if (!note) throw apiError.notFound("Note not found");
        await note.destroy();
        return {"message": "Note has been deleted"};
    }
}

export default new bookingService();