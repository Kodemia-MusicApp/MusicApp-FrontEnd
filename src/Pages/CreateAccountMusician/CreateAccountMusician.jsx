import React from 'react'
import './CreateAccountMusician.scss'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'

export const CreateAccountMusician = () => {
    return (
        <section>
            <Navbar />
            <div className="CreateAccountMusician">
                <div className="CreateAccountMusician-Container">
                    <p className="Login-Title">CREAR CUENTA COMO CLIENTE</p>
                    <p className="Bienvenida">Bienvenido a</p>
                    <p className="Bienvenida">tu músico ahora</p>
                    <form className="Login-Form">
                        <label>Nombre</label>
                        <input type="text" className="user" />

                        <label>Apellido paterno</label>
                        <input type="text" className="user" />

                        <label>Apellido materno</label>
                        <input type="text" className="user" />
                        <label>Escribe tu e-mail</label>
                        <input type="text" className="user" />

                        <label>Escribe una contraseña</label>
                        <input type="password" className="user" />

                        <button className="BotonGeneral">CREAR CUENTA</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
