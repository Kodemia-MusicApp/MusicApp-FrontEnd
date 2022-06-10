import React from 'react'
import './CreateAccountMusician.scss'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'

export const CreateAccountMusician = () => {
  return (
    <section>
        <Navbar />
        <div className="Login">
            <div className="Login-Container">
                <p className="Login-Title">INICIAR SESIÓN COMO CLIENTE</p>

                <form className="Login-Form">
                    <label>Correo electronico</label>
                    <input
                        type="text"
                        onChange={({ target }) => {
                            setUser({
                                ...user,
                                email: target.value,
                            })
                        }}
                        className="input-mail"
                    />

                    <p>Contraseña</p>
                    <input
                        type="password"
                        onChange={({ target }) => {
                            setUser({
                                ...user,
                                password: target.value,
                            })
                        }}
                        className="input-password"
                    />

                    <p className="Login-footer">
                        ¿No tiene contraseña? Crear cuenta
                    </p>
                    <button onClick={handleUser}>Entrar</button>
                </form>
            </div>
        </div>
    </section>
)
}
