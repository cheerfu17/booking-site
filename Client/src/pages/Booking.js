import { observer } from 'mobx-react-lite';
import React, {useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import BookingList from '../components/BookingList.js';
import CreateBookingNote from '../components/modals/CreateBookingNote.js';

const Booking = observer(() => {
    const [visibleNoteModal, setVisibleNoteModal] = useState(false);
    return (
        <Container>
            <h1 className='m-2'>
                Бронирование
            </h1>
            <Button className='m-2' onClick={() => setVisibleNoteModal(true)}>Создать запись</Button>
            <BookingList/>
            <CreateBookingNote show={visibleNoteModal} setShow={setVisibleNoteModal}/>
        </Container>
    );
});

export default Booking;