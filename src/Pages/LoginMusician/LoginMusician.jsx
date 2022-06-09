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
                    <input type="text" className="input-mail" />

                    <p>Contraseña</p>
                    <input type="password" className="input-password" />

                    <p className="LoginMusician-footer">
                        ¿No tiene contraseña? Crear cuenta
                    </p>
                    <button>Entrar</button>
                </form>
            </div>
        </div>
    </section>
)
