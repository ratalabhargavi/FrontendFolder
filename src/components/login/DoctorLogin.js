import { Button, Container, Form } from 'react-bootstrap';
import React, { useState } from 'react'
import config from '../../config'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DoctorLogin({ setIsLoggedIn }) {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted with data:', formData);

        axios.post(`${config.url}`, {
            email: formData.email,
            password: formData.password,
        }).then(response => {
            if (response.data === "Email not found") {
                throw new Error("Email not found");
            } else {
                sessionStorage.setItem('usertoken', response.data);
                sessionStorage.setItem('userData', JSON.stringify(formData));
                navigate(`/doctorDashboard/${formData.email}`);
            }
        }).catch(err => {
            console.log(err);
            // Handle other errors here
        });
    };

    return (
        <Container>
            <h2>Doctor Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Email address:</Form.Label>
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
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    )
}

export default DoctorLogin;
