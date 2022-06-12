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
                        <p>STATUS DE ACEPTACIÓN</p>
                        <div className="acceptationmessage">
                            <p>El músico a aceptado el servicio de contratación</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
