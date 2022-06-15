import React from 'react'
import './ReservationAccepted.scss'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ReservationCard } from '../../Components/ReservationCard/ReservationCard'
import { CardNewEvents } from '../../Components/CardNewEvents/CardNewEvents'

export const ReservationAccepted = () => {
    const [events, setEvents] = React.useState([])
    const Context = React.useContext(AppContext)
    const navigate = useNavigate()
    React.useEffect(() => {
        const token = localStorage.getItem('musicAppToken')
        console.log('lin7')
        axios
            .get(`${Context.api.apiUrl}event/accepted`, {
                headers: {
                    token: token,
                },
            })
            .then((res) => {
                setEvents(res.data.payload)
            })
    }, [])

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
                        {events.map((event, key) => (
                            <main>
                                {event.pagoAceptado === true ? (
                                    <></>
                                ) : (
                                    <section>
                                        <article className="bg-dark text-white">
                                            {console.log(event)}
                                            <div>{event.descripcion}</div>
                                            <div>{event.ciudad}</div>
                                        </article>

                                        <button
                                            className="BotonGeneral"
                                            onClick={() => {
                                                console.log(event)
                                                axios
                                                    .post(
                                                        `${Context.api.apiUrl}payment/create-payments`,
                                                        {
                                                            price: 500,
                                                            custom_id: `${event._id}`,
                                                        }
                                                    )
                                                    .then((res) => {
                                                        console.log(
                                                            res.data.data
                                                                .links[1].href
                                                        )
                                                        //window.open(res.data.data.links[1].href )
                                                        window.location.href =
                                                            res.data.data.links[1].href
                                                    })
                                            }}
                                        >
                                            REALIZAR PAGO DEL SERVICIO
                                        </button>
                                    </section>
                                )}
                            </main>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
