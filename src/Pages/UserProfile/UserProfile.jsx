import React from 'react'
import './UserProfile.scss'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'

export const UserProfile = () => {
    return (
        <section>
            <Navbar />
            <div className="UserProfile">
                <div className="UserProfile-Container">
                    <div className="UserProfile-Content">
                        <p className="Login-Title">MI PERFIL CLIENTE</p>
                        <div className="datos">
                            <div className="MisDatos">
                                MIS DATOS
                                <p>Nombre: Carlos Doe</p>
                                <p>CIudad: CDMX</p>
                            </div>
                            <div>EDITAR PERFIL</div>
                        </div>
                        <div>MIS RESERVACIONES</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
