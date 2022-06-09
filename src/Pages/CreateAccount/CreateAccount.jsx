import React from 'react'
import './CreateAccount.scss'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'

export const CreateAccount = () => {
    return (
        <section>
            <Navbar />
            Crear cuenta
        </section>
    )
}



export const InicioSesion = () => {
    return (
        <div>
            <Navbar />
            <div className="InicioSesion">
                <div className="InicioSesion-Container">
                    <p className="InicioSesion-Title">INICIAR SESIÓN</p>
                    <p className="Bienvenida">Bienvenido a</p>
                    <p className="NombreApp">tu musico ahora</p>
                    <div className="BotonesInicio">
                        <Link to="/login/client">
                            <button className="BotonInicio">SOY CLIENTE</button>
                        </Link>
                        <Link to="/login/musican">
                            <button className="BotonInicio">SOY MÚSICO</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
