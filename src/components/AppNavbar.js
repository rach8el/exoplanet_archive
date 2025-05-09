import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const AppNavbar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as ={Link} to="/">NASA's Exoplanet Data</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/facility">Planet Discovery Facility</Nav.Link>
                        <Nav.Link as={NavLink} to="/orbital-period">Planet Orbital Period</Nav.Link>
                        <Nav.Link as={NavLink} to="/mass">Planet Mass</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar;