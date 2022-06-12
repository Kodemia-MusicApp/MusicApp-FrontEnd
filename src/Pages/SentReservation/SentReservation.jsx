import React from 'react'
import './SentReservation.scss'
import { Navbar } from '../../Components/Navbar/Navbar'
export const SentReservation = () => {
    return (
        <div>
            <Navbar />
            <div className=" SentReservation ">
                <div className=" SentReservation-container">
                    <div className=" SentReservation-content">
                        <div className=" SentReservationBox1">
                            <p>Tu solicitud de contratación ha sido enviada</p>
                        </div>
                        <div className=" SentReservationBox2">
                            <p>
                                Te mandaremos una notificación una vez que el
                                musico acepte el servicio.{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
