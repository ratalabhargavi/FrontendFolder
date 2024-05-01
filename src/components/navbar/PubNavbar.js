import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import config from '../../config'
import React from 'react'

function PubNavbar() {
    return (
        <div>
            <Navbar bg="primary" text="white" expand="lg">
                <Navbar.Brand style={{ color: "white" }}></Navbar.Brand>
                <Navbar.Toggle />
                <Container>

                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link className="text-white" href="/">Home</Nav.Link>
                            <Nav.Link className="text-white" href="/about">About</Nav.Link>
                            <Nav.Link className="text-white" href="/gallery">Gallery</Nav.Link>
                            <Nav.Link className="text-white" href="/contact">Contact Us</Nav.Link>
                            <Nav.Link className="text-white" href="/regPatient">Patient Register</Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end mr-20">
                            <NavDropdown title="Login" className="me-auto" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/patient/login">Patient Login</NavDropdown.Item>
                                <NavDropdown.Item href="/doctors/login">Doctor Login</NavDropdown.Item>
                                <NavDropdown.Item href="/administrator/login">Admin Login</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default PubNavbar
