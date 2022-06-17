import React from 'react'
import './NavbarOp2.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { ButtonTranspOrg } from '../ButtonTranspOrg/ButtonTranspOrg';
import { ButtonOrange } from '../ButtonOrange/ButtonOrange';

export const NavbarOp2 = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" variant="dark">
            <Container>
                <Navbar.Brand href="#home" style={{color: '#FD4948', fontWeight: 'bold'}}>TuMusAh</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="Musicos" style={{color: '#FD4948', fontWeight: '600'}}>Musicos</Nav.Link>
                        <Nav.Link href="Contrataciones" style={{color: '#FD4948', fontWeight: '600'}}>Contrataciones</Nav.Link>
                        {/* <NavDropdown title="Generos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" style={{color: '#FD4948'}}>Bachata</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" style={{color: '#FD4948'}}>Rock & Roll</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" style={{color: '#FD4948'}}>Reggaeton</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4" style={{color: '#FD4948'}}>
                                Propon algun Genero
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <ButtonTranspOrg label='Inicia Sesion' />
                        <ButtonOrange label='Registrate'/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};