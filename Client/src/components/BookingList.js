import React, { useContext } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Context } from '../index';
import BookingItem from './BookingItem';
import { observer } from 'mobx-react-lite';

const BookingList = observer(() => {
    const {booking} = useContext(Context);
    return (
        <Container>
            <Card>
                {booking.bookingList.map(({id, description, User, Hall}, index) =>
                    <BookingItem index={index + 1} id={id} description={description} User={User} Hall={Hall} key={id}/> 
                )}
            </Card>
        </Container>
    );
});

export default BookingList;