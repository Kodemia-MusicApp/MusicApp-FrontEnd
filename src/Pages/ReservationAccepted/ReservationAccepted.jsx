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
    const [eventsAccepted, setEvents] = React.useState([])
    const Context = React.useContext(AppContext)
    const navigate = useNavigate()
    React.useEffect(() => {
        const token = localStorage.getItem('musicAppToken')
        axios
            .get(`${Context.api.apiUrl}event/client`, {
                headers: {
                    token: token,
                },
            })
            .then((res) => {
                console.log(res.data.payload)
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
                        {eventsAccepted.map((event, key) => (
                            <main>
                                {event.pagoAceptado === true &&
                                event.aceptado === true &&
                                event.eventoTerminado === false ? (
                                    <section className="card">
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                {event.nombreArtistico}
                                            </h5>
                                            <p class="card-text">
                                                {event.descripcion}
                                            </p>
                                            <div>{event.ciudad}</div>
                                            <a href="#" class="btn btn-primary">
                                                Evento cumplido
                                            </a>
                                        </div>

                                        <div></div>
                                    </section>
                                ) : event.aceptado === true ? (
                                    <section>
                                        <article className="card">
                                            <h5 className='card-title"'>
                                                {event.descripcion}
                                            </h5>
                                            <div className="card-text">
                                                {event.ciudad}
                                            </div>
                                            <div>{event.descripcion}</div>
                                            <div>{event.nombreArtistico}</div>
                                        </article>

                                        <button
                                            className="BotonGeneral"
                                            onClick={() => {
                                                //   console.log(event)
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
                                ) : (
                                    <></>
                                )}
                            </main>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
