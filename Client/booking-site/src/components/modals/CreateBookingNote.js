import React, { useContext } from 'react';
import { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../..';

const CreateBookingNote = ({show, setShow}) => {
    const {booking} = useContext(Context);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
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
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>

            <DropdownButton id="dropdown-basic-button" title="Выбор зала">
                {booking.hallList.map(({name}) => 
                    <Dropdown.Item >{name}</Dropdown.Item>
                )}
            </DropdownButton>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    );
};

export default CreateBookingNote;