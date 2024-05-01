import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react'
import config from '../../config'
import axios from 'axios';

function Billing({ handleBillingModalClose }) {

    const [newItem, setNewItem] = useState({
        name: '',
        quantity: '',
        unitPrice: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`${config.url}`.trim(), {
            name: newItem.name,
            quantity: newItem.quantity,
            unitPrice: newItem.unitPrice,
        }).then(response => {
            handleBillingModalClose();
        }).catch(err => {
            console.log(err)
        })
        handleBillingModalClose();
    };
    return (
        <div>
            <Form onSubmit={handleSubmit}>

                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={newItem.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="quantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        type="number"
                        name="quantity"
                        value={newItem.quantity}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="unitPrice">
                    <Form.Label>Unit Price</Form.Label>
                    <Form.Control
                        type="number"
                        name="unitPrice"
                        value={newItem.unitPrice}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Billing
