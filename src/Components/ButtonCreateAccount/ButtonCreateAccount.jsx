import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonCreateAccount = () => {
    return (
        <Link to="/crearcuenta">
            <button className="rounded-pill btn btn-outline-dark">
                Crear cuenta
            </button>
        </Link>
    )
}
