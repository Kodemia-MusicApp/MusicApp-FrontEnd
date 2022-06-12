import React from 'react'
import './Reservation.scss'
import { Navbar } from '../../Components/Navbar/Navbar'
export const Reservation = () => {
    return (
        <div>
            <Navbar />
            <div className="Reservation">
                <div className="Reservation-Container">
                    <p className="Login-Title">EDITAR MI PERFIL</p>
                    <div className="Reservation-Content"></div>
                </div>
            </div>
        </div>
    )
}
