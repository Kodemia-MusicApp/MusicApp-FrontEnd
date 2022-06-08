import React from 'react'
import './Login.scss'

export const Login = () => {
    return (
        <div className="Login">
            <div className="Login-Container">
                <p className="Login-Title">INICIAR SESIÓN COMO CLIENTE</p>

                <form className="Login-Form">
                    <label>Correo electronico</label>
                    <input type="text" className="input-mail" />

                    <p>Contraseña</p>
                    <input type="password" className="input-password" />

                    <p className="Login-footer">
                        ¿No tiene contraseña? Crear cuenta
                    </p>
                </form>
            </div>
        </div>
    )
}