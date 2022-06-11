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
                                src="
                                https://img.freepik.com/vector-gratis/grupo-rock-o-banda-chicos-musica-pop-tres-musicos-tocando-guitarras-tambores-cantando-ilustracion-personajes-vectoriales-dibujos-animados-planos_125371-305.jpg?w=2000"
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
