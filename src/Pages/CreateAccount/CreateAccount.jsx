////jsx

import React from 'react'
import './CreateAccount.scss'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'

export const CreateAccount = () => {
    return (
        <div>
            <Navbar />
            <div className="CreateAccount">
                <div className="CreateAccount-Container">
                    <p className="CreateAccount-Title">CREAR CUENTA</p>
                    <p className="Bienvenida">Bienvenido a</p>
                    <p className="NombreApp">tu musico ahora</p>

                    <div className="usuarios">
                        <div className="SoyCliente">
                            <p className="TitleSoyCliente">SOY CLIENTE</p>
                            <hr></hr>
                            <p>
                                "tu musico ahora" te ayuda a encontrar a tu
                                músico en todo momento y cerca de ti.{' '}
                            </p>
                            <Link to="/crearcuenta/cliente">
                                <button className="registrate">
                                    REGISTRATE
                                </button>
                            </Link>
                        </div>
                        <div className="SoyMusico">
                            <p className="TitleSoyMusico">SOY MÚSICO</p>
                            <hr></hr>
                            <p>
                                Registrate en "tu musico ahora" como artista
                                musico y encuentra tu evento
                            </p>
                            <Link to="/crearcuenta/musican">
                                <button className="registrate">
                                    REGISTRATE
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
