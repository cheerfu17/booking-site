import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { createHall } from '../components/http/bookingAPI';
import { Context } from '..';

const Admin = () => {
    const {booking} = useContext(Context);
    const [hallName, setHallName] = useState("");

    const create = async () => {
        try { 
            const hall = await createHall(hallName);
            booking.setHallList([...booking.hallList, hall]);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <Form.Label>Создать зал</Form.Label>
            <Form.Control value={hallName} onChange={e => setHallName(e.target.value)}/>
            <Button onClick={create}>Create</Button>
        </Container>
    );
};

export default Admin;