import React from 'react'
import './Navbar.scss'
import { AppContext } from '../../Context/AppContext'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const Context = React.useContext(AppContext)
    const navigate = useNavigate()
    React.useEffect(() => {
        const token = localStorage.getItem('musicAppToken')
        axios
            .post(
                `${Context.api.apiUrl}auth/login/verify`,
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
        <div className="d-flex justify-content-between py-3 bg-navbar text-light">
            <img src="" alt="" />
            <p className="NombreApp">Tu musAh</p>
            <Link to="/" className="text-decoration-none text-light" >
                Inicio
            </Link>
            {Context.user.name !== '' ? (
                <></>
            ) : (
                <Link to="/crearcuenta" className="text-decoration-none text-light" >
                    Crear cuenta
                </Link>
            )}

            {Context.user.name !== '' ? (
                <></>
            ) : (
                <Link to="/login" className="text-decoration-none text-light">
                    Iniciar sesión
                </Link>
            )}

            {Context.user.name !== '' ? (
                Context.user.typeClient == 'Musico' ? (
                    <Link to="/profilemusician">
                        {' '}
                        <p>Mi Perfil</p>{' '}
                    </Link>
                ) : (
                    <Link to="/userprofile">
                        {' '}
                        <p>Mi Perfil</p>{' '}
                    </Link>
                )
            ) : (
                <></>
            )}
            {Context.user.name !== '' ? (
                <Link to="/reservationaccepted">
                    <p>Mis Eventos</p>{' '}
                </Link>
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
                <></>
            )}
            <img src="" alt="" />
        </div>
    )
}
