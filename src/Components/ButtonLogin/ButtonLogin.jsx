import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonLogin.scss'
export const ButtonLogin = () => {
    return (
        <Link to="/login">
            <button className="rounded-pill btn btn-outline-dark mx-3">
                Iniciar Sesion
            </button>
        </Link>
    )
}
