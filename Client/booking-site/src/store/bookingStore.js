export default class BookingStore{
    constructor() {
        this._bookingList = [];
        this._hallList = [];
    }

    setBookingList(bookingList){
        this._bookingList = bookingList;
    }

    setHallList(hallList){
        this._hallList = hallList;
    }

    get bookingList(){
        return this._bookingList;
    }

    get hallList(){
        return this._hallList;
    }
}