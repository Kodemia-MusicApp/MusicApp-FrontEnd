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
                    <div className="Reservation-Content">
                        <div className="reservationData">
                            <p>DATOS GRUPO/ARTISTA</p>
                            <p>Grupo: Unido</p>
                            <p>Area de covertura: CDMX</p>
                            <p>Género: Música alternativa</p>
                        </div>
                        <form>
                            <p>DIRECCIÓN DEL EVENTO</p>
                           

                            <label>Colonia</label>
                            <input type="text"/>

                            <label>Calle</label>
                            <input type="text"/>

                            <label>Número</label>
                            <input type="text"/>

                            <label>Día del evento</label>
                            <input type="text"/>



                            <label>Número</label>
                            <input type="text"/>

                            <label>Tipo de evento</label>
                            <input type="text"/>

                            
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
