import { Booking, Hall, User } from "../Models/Models.js";
import apiError from "../Errors/apiError.js";
import { Model, Op } from "sequelize";
class bookingService{
    async get(){
        const bookings = await Booking.findAll({include: [{model: User}, {model: Hall}]});
        if (!bookings.length) throw apiError.notFound("Notes not found");
        return bookings;
    }

    async getOne(id){
        const note = await Booking.findByPk(id);
        if (!note) throw apiError.notFound("Note not found");
        return note;
    }

    async create(data){
        const find_note = await Booking.findOne({where: {
            HallId: data.HallId,
            [Op.or] : [
                {beginDate: {[Op.between]: [data.beginDate, data.endDate]}},
                {endDate: {[Op.between]: [data.beginDate, data.endDate]}},
                {
                    [Op.and]: 
                    [
                        {beginDate: {
                            [Op.lt]: data.beginDate 
                        }},
                        {endDate: {
                            [Op.gt]: data.endDate 
                        }}
                    ]
                }
            ]
        }});

        if (find_note) throw apiError.badRequest(`Date already booked`);
        const note = await Booking.create(data);
        return note;
    }

    async patch(id, data, user){
        const note = await Booking.findByPk(id);
        if (!note) throw apiError.notFound("Note not found");
        if (note.UserId != user.id) throw apiError.forbidden("Access denied");
        return await note.update(data);
    }

    async delete(id, user){
        const note = await Booking.findByPk(id);
        if (!note) throw apiError.notFound("Note not found");
        if (note.UserId != user.id) throw apiError.forbidden("Access denied");
        await note.destroy();
        return {"message": "Note has been deleted"};
    }
}

export default new bookingService();