import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonCreateAccount = () => {
    return (
        <Link to="/crearcuenta/cliente">
            <button>Crear cuenta</button>
        </Link>
    )
}
