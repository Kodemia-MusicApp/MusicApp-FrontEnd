import React from 'react'
import './ReservationCard.scss'
import './grupocumbia.jpg'
export const ReservationCard = () => {
    return (
        <div className="ReservationCard">
            <div className="ReservationCard-container">
                <div className="ReservationCard-content">
                    <div className="Reservacion">
                        <div className="profileImage"></div>
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
