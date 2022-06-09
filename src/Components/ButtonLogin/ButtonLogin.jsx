import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonLogin.scss'
export const ButtonLogin = () => {
    return (
        <Link to="/login">
            <button>Iniciar Sesion</button>
        </Link>
    )
}
