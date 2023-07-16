import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../..';
import { createBooking, getBooking } from '../http/bookingAPI';

const CreateBookingNote = ({show, setShow}) => {
    const {booking, user} = useContext(Context);
    const [date, setDate] = useState({
      date: "",
      beginTime: "",
      endTime: ""
    });

    const [bookingData, setBookingData] = useState({
      description: "",
      HallId: "",
      UserId: "",
      beginDate: "",
      endDate: ""
    });

    const dateCompare = async ()=>{
      try {
        bookingData.UserId = user.user.id;
        bookingData.beginDate = date.date+"T" + date.beginTime;
        bookingData.endDate = date.date+"T" + date.endTime;
        await createBooking(bookingData);
        const bookingList = await getBooking();
        booking.setBookingList(bookingList);
        setShow(false);
      } catch (error) {
        console.log(error)
      }
    }

    const handleClose = () => setShow(false);
    
    return (  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Booking Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Описание записи</Form.Label>
                <Form.Control as="textarea" rows={3} value={bookingData.description} onChange={e => setBookingData({...bookingData, description: e.target.value})}/>
              </Form.Group>
            </Form>

            <select class="form-select" aria-label="Default select example" 
              onChange={e => setBookingData({...bookingData, HallId: e.target.value})}
            >

              <option selected>Open this select menu</option>
              {booking.hallList.map(({id, name}) => 
                <option value={id} key={id}>{name}</option>
              )}
            </select>

            <Form.Label className='mb-3'>Начало бронирования</Form.Label>
            <Form.Control className='mb-3' type='date' value={date.date} onChange={e => setDate({...date, date: e.target.value})} rows={3} />
            <div>
              <div className='mb-3'>
                <Form.Label >Начало бронирования</Form.Label>
                <Form.Control className='mb-3' type='time' value={date.beginTime} onChange={e => setDate({...date, beginTime: e.target.value})} rows={3} />
              </div>
              
              <div className='mb-3'>
                <Form.Label >Конец бронирования</Form.Label>
                <Form.Control className='mb-3' type='time' value={date.endTime} onChange={e => setDate({...date, endTime: e.target.value})} rows={3} />
              </div>
            </div>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={dateCompare}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    );
};

export default CreateBookingNote;