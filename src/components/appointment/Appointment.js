import { Button, Container, Form } from 'react-bootstrap';
import React, { useState } from 'react'
import config from '../../config'
import axios from 'axios';

function Appointment({ handleBookingModalClose }) {

  const [formData, setFormData] = useState({
    name: '',
    doctorName: '',
    appointmentDate: '',
    status: '',
    payment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${config.url}`.trim(), {
      name: formData.name,
      doctorName: formData.doctorName,
      appointmentDate: formData.appointmentDate,
      status: formData.status,
      payment: formData.payment,
    }).then(response => {
      handleBookingModalClose();
    }).catch(err => {
      console.log(err)
    })
    handleBookingModalClose();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="doctorName">
          <Form.Label>Doctor Name</Form.Label>
          <Form.Control
            type="text"
            name="doctorName"
            value={formData.doctorName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="appointmentDate">
          <Form.Label>Appointment Date</Form.Label>
          <Form.Control
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="status">
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="payment">
          <Form.Label>Payment</Form.Label>
          <Form.Control
            type="text"
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" className="mr-3" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Appointment
