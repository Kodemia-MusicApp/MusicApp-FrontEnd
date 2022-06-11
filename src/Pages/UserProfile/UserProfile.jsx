import React from 'react'
import './UserProfile.scss'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'
import '../../Icons/icons.svg'
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
                                <div>
                                    <p>MIS DATOS</p>
                                    <p className="name">Nombre: Carlos Doe</p>
                                    <p className="city">CIudad: CDMX</p>
                                </div>
                                <div className="textEditProfile">
                                    <p>EDITAR PERFIL</p><img src="pen.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <div className="Rerservations">
                            <p>MIS RESERVACIONES</p>
                            <div className="reservationcards">
                                <div className="reservationcard"></div>
                                <div className="reservationcard"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
