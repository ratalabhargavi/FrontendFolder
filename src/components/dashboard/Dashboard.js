import { Button, Card, Modal, Table } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'

import Appointment from '../appointment/Appointment';
import Billing from '../billing/Billing';
import Register from '../patient/register';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../../config';
const appointments = [
    {
        id: 1,
        name: 'John Doe',
        doctorName: 'Dr. Smith',
        appointmentDate: '2023-10-30',
        status: 'Confirmed',
        payment: '$100',
    },
    {
        id: 2,
        name: 'Jane Smith',
        doctorName: 'Dr. Johnson',
        appointmentDate: '2023-11-05',
        status: 'Pending',
        payment: '$75',
    },
];

const billingItems = [
    {
        id: 1,
        name: 'Medicine A',
        quantity: 2,
        unitPrice: 10,
        total: 20,
    },
    {
        id: 2,
        name: 'Medicine B',
        quantity: 1,
        unitPrice: 15,
        total: 15,
    },
];

const labReports = [
    {
        id: 1,
        patientName: 'John Doe',
        reportName: 'Blood Test',
        date: '2023-10-15',
        doctorName: 'Dr. Smith',
    },
    {
        id: 2,
        patientName: 'Jane Smith',
        reportName: 'X-Ray',
        date: '2023-10-16',
        doctorName: 'Dr. Johnson',
    },
];

function Dashboard() {

    const [showModal, setShowModal] = useState(false);
    const [bookingModal, setBookingModal] = useState(false);
    const [billingModal, setBillingModal] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [billingItems, setBillingItems] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        async function fetchappointment() {
            try {
                const response = await axios.get(`${config.url}` / Appointment.trim())
                    .then(res => {
                        const details = res.data;
                        console.log(" details ", details);
                        setAppointments(details.data)
                    });
            } catch (error) {
                // Handle errors here
                console.error('Error fetching data:', error);
            }
        }

        async function fetchbill() {
            try {
                await axios.get(`${config.url}` / Billing.trim())
                    .then(res => {
                        const details = res.data;
                        setBillingItems(details.data)
                        console.log(" billing ", details);
                    });
            } catch (error) {
                // Handle errors here
                console.error('Error fetching data:', error);
            }
        }
        // Call the async function
        fetchappointment();
        fetchbill();
    }, []);

    const handlePatientNameClick = (id) => {
        navigate(`/appointmentForm/${id}`);
    };
    const onClickRegister = (id) => {
        // navigate(`/regPatient`);
        handleModalOpen();
    };
    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const onClickBooking = (id) => {
        handleBookingModalOpen();
    };
    const handleBookingModalOpen = () => {
        setBookingModal(true);
    };

    const handleBookingModalClose = () => {
        setBookingModal(false);
    };

    const onClickBilling = (id) => {
        handleBillingModalOpen();
    };
    const handleBillingModalOpen = () => {
        setBillingModal(true);
    };

    const handleBillingModalClose = () => {
        setBillingModal(false);
    };
    return (
        <>

            <Card style={{ height: '18rem' }}>

                <Card.Body>
                    <Card.Title style={{ backgroundColor: '#0d6efd', color: 'white' }}>Appointments</Card.Title>
                    <Card.Text>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Doctor Name</th>
                                    <th>Appointment Date</th>
                                    <th>Status</th>
                                    <th>Payment</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map((appointment, index) => (
                                    <tr key={appointment.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <button
                                                onClick={() => handlePatientNameClick(appointment.id)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {appointment.name}
                                            </button>
                                        </td>
                                        <td>{appointment.doctorName}</td>
                                        <td>{appointment.appointmentDate}</td>
                                        <td>{appointment.status}</td>
                                        <td>{appointment.payment}</td>
                                        <td><Button
                                            onClick={() => onClickRegister(appointment.id)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Register
                                        </Button>

                                            <Modal show={showModal} onHide={handleModalClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Patient Registration</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Register handleModalClose={handleModalClose}></Register>
                                                </Modal.Body>

                                            </Modal>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>


            <Card style={{ height: '18rem' }}>
                <Card.Body>
                    <Card.Title style={{ backgroundColor: '#0d6efd', color: 'white' }}>Billing information</Card.Title>
                    <Card.Text>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Unit Price</th>
                                    <th>Total</th>

                                </tr>
                            </thead>
                            <tbody>
                                {billingItems.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <button
                                            onClick={() => handlePatientNameClick(item.id)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {item.name}
                                        </button>
                                        <td>{item.quantity}</td>
                                        <td>{item.unitPrice}</td>
                                        <td>{item.total}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ height: '18rem' }}>
                <Card.Body>
                    <Card.Title style={{ backgroundColor: '#0d6efd', color: 'white' }}>Lab Reports</Card.Title>
                    <Card.Text>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Patient Name</th>
                                    <th>Report Name</th>
                                    <th>Date</th>
                                    <th>Doctor Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {labReports.map((report, index) => (
                                    <tr key={report.id}>
                                        <td>{index + 1}</td>
                                        <button
                                            onClick={() => handlePatientNameClick(report.id)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {report.patientName}
                                        </button>
                                        <td>{report.reportName}</td>
                                        <td>{report.date}</td>
                                        <td>{report.doctorName}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Button
                onClick={() => onClickBooking()}
                style={{ cursor: 'pointer', width: '150px' }}
                size="sm"
            >
                Book Appointment
            </Button>

            <Modal show={bookingModal} onHide={handleBookingModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Appointment Registration</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Appointment handleBookingModalClose={handleBookingModalClose}></Appointment>
                </Modal.Body>

            </Modal>
            <Button
                onClick={() => onClickBilling()}
                style={{ cursor: 'pointer', width: '150px' }}
                size="sm"
            >
                Billing
            </Button>

            <Modal show={billingModal} onHide={handleBillingModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Billing Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Billing handleBillingModalClose={handleBillingModalClose}></Billing>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default Dashboard
