import React from 'react'
import './InicioSesion.scss'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'

export const InicioSesion = () => {
    return (
        <div>
            <Navbar />
            <div className="InicioSesion">
                <div className="InicioSesion-Container">
                    <p className="CreateAccount-Title">INICIAR SESIÓN</p>
                    <p className="Bienvenida">Bienvenido a</p>
                    <p className="NombreApp1">TumusAh</p>
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

