import { Button, Container, Form } from 'react-bootstrap';
import React, { useState } from 'react'
import config from '../../config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DoctorRegister = ({ isLoggedIn, handleModalClose }) => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: '',
        address: '',
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to the server)
        console.log('Form submitted with data:', formData);
        axios.get("https://64e70686b0fd9648b78f35f8.mockapi.io/api/v1/pobv")
        axios.get(`${config.url}`.trim())
        await axios.post(`${config.url} create`.trim(), {
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            phoneNumber: formData.phoneNumber,
            dateOfBirth: formData.dateOfBirth,
            address: formData.address,
        }).then(response => {
            handleModalClose();
        }).catch(err => {
            console.log(err)
        })

    };
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="firstName">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="phoneNumber">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="dateOfBirth">
                    <Form.Label>Date of Birth:</Form.Label>
                    <Form.Control
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="address">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </Container>
    )
}

export default DoctorRegister
