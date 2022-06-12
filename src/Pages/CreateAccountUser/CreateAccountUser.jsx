import React from 'react'
import './CreateAccountUser.scss'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

export const CreateAccountUser = () => {
    const navigate = useNavigate()
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
                            <label className="labelCreateUse">Nombre</label>
                            <input
                                type="text"
                                className="createUser"
                                onChange={({ target }) => {
                                    setUser({ ...user, name: target.value })
                                }}
                            />

                            <label className="labelCreateUse">
                                Apellido paterno
                            </label>
                            <input
                                type="text"
                                className="createUser"
                                onChange={({ target }) => {
                                    setUser({ ...user, lastname: target.value })
                                }}
                            />

                            <label className="labelCreateUse">
                                Apellido materno
                            </label>
                            <input
                                type="text"
                                className="createUser"
                                onChange={({ target }) => {
                                    setUser({
                                        ...user,
                                        secondlastname: target.value,
                                    })
                                }}
                            />

                            <label className="labelCreateUse">
                                Escribe tu e-mail
                            </label>
                            <input
                                type="text"
                                className="createUser"
                                onChange={({ target }) => {
                                    setUser({ ...user, email: target.value })
                                }}
                            />

                            <label className="labelCreateUse">
                                Escribe una contraseña
                            </label>
                            <input
                                type="password"
                                className="createUser"
                                onChange={({ target }) => {
                                    setUser({ ...user, password: target.value })
                                }}
                            />

                            <button
                                className="BotonGeneral"
                                onClick={() => {
                                    navigate('/')
                                }}
                            >
                                CREAR CUENTA
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
