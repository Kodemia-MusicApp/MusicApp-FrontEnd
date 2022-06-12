import React from 'react'
import './ReservationAccepted.scss'
import { Navbar } from '../../Components/Navbar/Navbar'

export const ReservationAccepted = () => {
    return (
        <div>
            <Navbar />
            <div className="ReservationAccepted">
                <div className="ReservationAccepted-container">
                    <div className="ReservationAccepted-content">
                        <p className="InicioSesion-Title">
                            STATUS DE ACEPTACIÓN
                        </p>
                        <div className="acceptationmessage">
                            <p>
                                El músico a aceptado el servicio de contratación
                            </p>
                        </div>
                        <button className="BotonGeneral">REALIZAR PAGO DEL SERVICIO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
