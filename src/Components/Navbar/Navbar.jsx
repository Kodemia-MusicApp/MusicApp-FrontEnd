import React from 'react'
import './Navbar.scss'
import { User } from '../User/User'
import { AppContext } from '../../Context/AppContext'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const context = React.useContext(AppContext)
    console.log(context)
    return (
        <div className="Navbar-Container">
            <img src="" alt="" />
            <p>Tu Musico Ahora</p>
            <Link to="/" className="text-decoration-none">
                Inicio
            </Link>
            <Link to="/crearcuenta/cliente" className="text-decoration-none">
                Crear cuenta
            </Link>
            <Link to="/login/client" className="text-decoration-none">
                Iniciar session
            </Link>
            {context.user.userId != '' ? <p>Mi Perfil</p> : <></>}
            <img src="" alt="" />
        </div>
    )
}
