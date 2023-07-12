import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Context } from '../index';

const BookingItem = ({index, b_id, description, User, Hall}) => {
    const {user} = useContext(Context);
    return (
        <Card className='d-flex flex-row justify-content-between align-items-center m-3'>
                <div className='d-flex flex-row m-3'>
                    <p className='m-3'>{index}.</p>
                    <p className='m-3'>Зал: {Hall.name}</p>
                    <p className='m-3'>Забронировал: {User.name}</p>
                    <p className='m-3'>{description}</p>
                </div>
                {user.isAuth ?
                    <Button className='m-3'>Удалить</Button>
                    :
                    <div></div>
                }
        </Card>
    );
};

export default BookingItem;