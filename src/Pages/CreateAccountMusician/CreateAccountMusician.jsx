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

                    <form className="Login-Form">
                        <label>Nombre</label>
                        <input type="text" className="input-mail" />

                        <p>Contraseña</p>
                        <input type="password" className="input-password" />
                    </form>
                </div>
            </div>
        </section>
    )
}
