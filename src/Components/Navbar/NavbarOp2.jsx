import React from 'react'
import './NavbarOp2.scss'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { ButtonTranspOrg } from '../ButtonTranspOrg/ButtonTranspOrg'
import { ButtonOrange } from '../ButtonOrange/ButtonOrange'
import { AppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const NavbarOp2 = () => {
    const Context = React.useContext(AppContext)
    const navigate = useNavigate()
    React.useEffect(() => {
        const token = localStorage.getItem('musicAppToken')
        axios
            .post(
                `${Context.api.apiUrl}/auth/login/verify`,
                {},
                {
                    headers: {
                        token: token,
                    },
                }
            )
            .then((res) => {
                Context.setUserId(res.data.payload[0])
            })
            .catch((error) => {})
    }, [])
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" variant="dark">
            <Container>
                <Navbar.Brand
                    href="/"
                    style={{ color: '#FD4948', fontWeight: 'bold' }}
                >
                    TuMusAh
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="Musicos"
                            style={{ color: '#FD4948', fontWeight: '600' }}
                        >
                            Musicos
                        </Nav.Link>
                        <Nav.Link
                            href="Contrataciones"
                            style={{ color: '#FD4948', fontWeight: '600' }}
                        >
                            Contrataciones
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        {Context.user.name !== '' ? (
                            Context.user.typeClient == 'Musico' ? (
                                <ButtonTranspOrg
                                    href="/profilemusician"
                                    label="Mi perfil"
                                />
                            ) : (
                                <ButtonTranspOrg
                                    href="/userprofile"
                                    label="Mi perfil"
                                />
                            )
                        ) : (
                            <ButtonTranspOrg label="Inicia Sesion" />
                        )}
                        {Context.user.name !== '' ? (
                            Context.user.typeClient == 'Musico' ? (
                                <ButtonTranspOrg
                                    href="/musician/events"
                                    label="Mis Eventos"
                                />
                            ) : (
                                <ButtonTranspOrg
                                    href="/reservationaccepted"
                                    label="Mis Eventos"
                                />
                            )
                        ) : (
                            <></>
                        )}

                        {Context.user.name !== '' ? (
                            <button
                                className="btn btn-outline-primary"
                                onClick={() => {
                                    navigate('/')
                                    window.location.reload(true)
                                    localStorage.removeItem('musicAppToken')
                                    //
                                }}
                            >
                                Cerrar sesion
                            </button>
                        ) : (
                            <ButtonOrange label="Registrate" />
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
