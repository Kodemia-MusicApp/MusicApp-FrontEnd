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
                    <p className="Login-Title">CREAR CUENTA COMO CLIENTE</p>
                    <p className="Bienvenida">Bienvenido a</p>
                    <p className="Bienvenida">tu musico ahora</p>
                    <form className="Login-Form">
                        <label>Nombre</label>
                        <input type="text" className="userName" />

                        <label>Apellido paterno</label>
                        <input type="text" className="input-mail" />

                        <label>Apellido materno</label>
                        <input type="text" className="input-mail" />
                        <label>Escribe tu e-mail</label>
                        <input type="text" className="input-mail" />

                        <p>Escribe una contraseña</p>
                        <input type="password" className="input-password" />
                    </form>
                </div>
            </div>
        </section>
    )
}
