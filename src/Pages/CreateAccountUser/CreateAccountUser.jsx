import React from 'react'
import './CreateAccountUser.scss'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'

export const CreateAccountUser = () => {
    return (
        <section>
            <Navbar />
            <div className="CreateAccountUser">
                <div className="CreateAccountUser-Container">
                    <p className="Login-Title">CREAR CUENTA COMO CLIENTE</p>

                    <p className="Bienvenida1">Bienvenido a</p>
                    <p className="Bienvenida2">tu músico ahora</p>
                    <div className="CreateAccountUserFormulario">
                        <form className="CreateAccountUserForm">
                            <label>Nombre</label>
                            <input type="text" className="createUser" />

                            <label>Apellido paterno</label>
                            <input type="text" className="createUser" />

                            <label>Apellido materno</label>
                            <input type="text" className="createUser" />

                            <label>Escribe tu e-mail</label>
                            <input type="text" className="createUser" />

                            <label>Escribe una contraseña</label>
                            <input type="password" className="user" />

                      
                            <button className="BotonGeneral">
                                CREAR CUENTA
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
