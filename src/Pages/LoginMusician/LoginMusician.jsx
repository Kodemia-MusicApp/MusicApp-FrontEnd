import React, { useContext, useEffects } from 'react'
import './Login.scss'
import { AppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'
import axios from 'axios'

export const LoginMusician = () => {}
return (
    <section>
        <Navbar />
        <div className="LoginMusician">
            <div className="LoginMusician-Container">
                <p className="LoginMusician-Title">
                    INICIAR SESIÓN COMO MÚSICO
                </p>

                <form className="LoginMusician-Form">
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
