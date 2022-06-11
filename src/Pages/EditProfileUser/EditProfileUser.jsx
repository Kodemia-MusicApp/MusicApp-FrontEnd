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
                    <p className="Login-Title">EDITAR MI PERFIL</p>

                    <p className="Bienvenida1">Bienvenido a</p>
                    <p className="Bienvenida2">tu músico ahora</p>
                    <div className="CreateAccountUserFormulario">
                        <form className="CreateAccountUserForm">
                            <label className="labelCreateUse">Nombre</label>
                            <input type="text" className="createUser" />

                            <label className="labelCreateUse">
                                Apellido paterno
                            </label>
                            <input type="text" className="createUser" />

                            <label className="labelCreateUse">
                                Apellido materno
                            </label>
                            <input type="text" className="createUser" />

                            <label className="labelCreateUse">
                                Escribe tu e-mail
                            </label>
                            <input type="text" className="createUser" />

                            <label className="labelCreateUse">
                                Escribe una contraseña
                            </label>
                            <input type="password" className="createUser" />

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
