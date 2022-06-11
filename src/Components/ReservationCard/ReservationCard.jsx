import React from 'react'
import './ReservationCard.scss'

export const ReservationCard = () => {
    return (
        <div className="ReservationCard">
            <div className="ReservationCard-container">
                <div className="ReservationCard-content">
                    <div className="Reservacion">
                        <div className="profileImage">
                            <img
                                src={require('../../Images/grupocumbia.jpg')}
                                alt=""
                            />
                        </div>
                        <div className="reservationCardData">
                            <p>Grupo: Limite</p>
                            <p>Seprtiembre 12 de 2pm a 1 am</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
