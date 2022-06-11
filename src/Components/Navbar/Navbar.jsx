import React from 'react'
import './Navbar.scss'
import { User } from '../User/User'
import { AppContext } from '../../Context/AppContext'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { render } from 'react-dom'

export const Navbar = () => {
    const Context = React.useContext(AppContext)
    const navigate = useNavigate()
    React.useEffect(() => {
        const token = localStorage.getItem('musicAppToken')
        axios
            .post(
                `http://localhost:8080/auth/login/verify`,
                {},
                {
                    // ${Context.api.apiUrl}
                    headers: {
                        token: token,
                    },
                }
            )
            .then((res) => {
                Context.setUserId(res.data.payload[0])
            })
            .catch((error) => {
                // console.log(error)
            })
    }, [])
    return (
        <div className="Navbar-Container">
            <img src="" alt="" />
            <p>Tu Musico Ahora</p>
            <Link to="/" className="text-decoration-none">
                Inicio
            </Link>
            {Context.user.name !== '' ? (
                <></>
            ) : (
                <Link
                    to="/crearcuenta/cliente"
                    className="text-decoration-none"
                >
                    Crear cuenta
                </Link>
            )}
            {Context.user.name !== '' ? (
                <></>
            ) : (
                <Link to="/login" className="text-decoration-none">
                    Iniciar sesión
                </Link>
            )}
            {Context.user.name !== '' ? <p>Mi Perfil</p> : <></>}
            {Context.user.name !== '' ? (
                <button
                    onClick={() => {
                        console.log('entra lin60')
                        localStorage.removeItem('musicAppToken')
                        window.location.reload(false)
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
