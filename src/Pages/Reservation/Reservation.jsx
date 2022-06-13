import React from 'react'
import './Reservation.scss'
import { Navbar } from '../../Components/Navbar/Navbar'
import { useParams } from 'react-router-dom'

export const Reservation = () => {
    const { id } = useParams()
    console.log(id)
    return (
        <div>
            <Navbar />
            <div className="Reservation">
                <div className="Reservation-Container">
                    <p className="Login-Title">RESERVACIÓN</p>
                    <div className="Reservation-Content">
                        <div className="reservationData">
                            <p className="dataTitles">DATOS GRUPO/ARTISTA</p>
                            <p className="datatext">Grupo: Unido</p>
                            <p className="datatext">Area de covertura: CDMX</p>
                            <p className="datatext">
                                Género: Música alternativa
                            </p>
                        </div>
                        <form>
                            <p className="dataTitles">DIRECCIÓN DEL EVENTO</p>

                            <label>Colonia</label>
                            <input type="text" className="inputReservation" />

                            <label>Calle</label>
                            <input type="text" className="inputReservation" />

                            <label>Número</label>
                            <input type="text" className="inputReservation" />

                            <label>Día del evento</label>
                            <input type="text" className="inputReservation" />

                            <label>Número</label>
                            <input type="text" className="inputReservation" />

                            <p className="dataTitles">Hora del evento</p>
                            <label>De &nbsp;</label>
                            <select
                                className="ReservationHour"
                                id="ReservationHour"
                            >
                                <option value="0">0</option>
                                <option value="1am">1am</option>
                                <option value="2am">2am</option>
                                <option value="3am">3am</option>
                                <option value="4am">4am</option>
                                <option value="5am">5am</option>
                                <option value="6am">6am</option>
                                <option value="7am">7am</option>
                                <option value="8am">9am</option>
                                <option value="10am">10am</option>
                                <option value="11am">11am</option>
                                <option value="12am">12am</option>
                                <option value="1pm">1pm</option>
                                <option value="2pm">1pm</option>
                                <option value="3pm">3pm</option>
                                <option value="4pm">4pm</option>
                                <option value="5pm">5pm</option>
                                <option value="6pm">6pm</option>
                                <option value="7pm">7pm</option>
                                <option value="8pm">8pm</option>
                                <option value="9pm">9pm</option>
                                <option value="10pm">10pm</option>
                                <option value="11pm">11pm</option>
                                <option value="12pm">12pm</option>
                            </select>
                            <label>&nbsp; a &nbsp; </label>
                            <select
                                className="ReservationHour"
                                id="ReservationHour"
                            >
                                <option value="0">0</option>
                                <option value="1am">1am</option>
                                <option value="2am">2am</option>
                                <option value="3am">3am</option>
                                <option value="4am">4am</option>
                                <option value="5am">5am</option>
                                <option value="6am">6am</option>
                                <option value="7am">7am</option>
                                <option value="8am">9am</option>
                                <option value="10am">10am</option>
                                <option value="11am">11am</option>
                                <option value="12am">12am</option>
                                <option value="1pm">1pm</option>
                                <option value="2pm">1pm</option>
                                <option value="3pm">3pm</option>
                                <option value="4pm">4pm</option>
                                <option value="5pm">5pm</option>
                                <option value="6pm">6pm</option>
                                <option value="7pm">7pm</option>
                                <option value="8pm">8pm</option>
                                <option value="9pm">9pm</option>
                                <option value="10pm">10pm</option>
                                <option value="11pm">11pm</option>
                                <option value="12pm">12pm</option>
                            </select>
                            <p className="dataTitles2">Tipo de evento</p>
                            <input type="text" />
                            <Link to="/sentreservation">
                                <button className="BotonGeneral">
                                    RESERVAR EVENTO
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
