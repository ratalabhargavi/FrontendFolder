import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import config from '../../config'
import Container from 'react-bootstrap/Container';
import React from 'react'

function NavbarCOM() {
    return (
        <div>
            <Navbar bg="primary" text="white" expand="lg">
                <Navbar.Brand style={{ color: "white" }}></Navbar.Brand>
                <Navbar.Toggle />
                <Container>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link className="text-white" href="/patientDashboard">Dashboard</Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end mr-20">
                            <NavDropdown title="Account" className="me-auto" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/patient/login">Profile</NavDropdown.Item>
                                <NavDropdown.Item >Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarCOM
