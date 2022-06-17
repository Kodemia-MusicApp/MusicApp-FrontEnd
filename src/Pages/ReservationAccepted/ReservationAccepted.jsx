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
    const [eventsAccepted, setEventsAccepted] = React.useState([])
    const [eventsProgress, setEventsProgress] = React.useState([])
    const Context = React.useContext(AppContext)
    const navigate = useNavigate()

    React.useEffect(() => {
        const token = localStorage.getItem('musicAppToken')
        axios
            .get(`${Context.api.apiUrl}event/client/accepted`, {
                headers: {
                    token: token,
                },
            })
            .then((res) => {
                setEventsAccepted(res.data.payload)
            })
        axios
            .get(`${Context.api.apiUrl}event/client/progress`, {
                headers: {
                    token: token,
                },
            })
            .then((res) => {
                setEventsProgress(res.data.payload)
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
                            <section>
                                <article className="card">
                                    <h5 className='card-title"'>
                                        {event.descripcion}
                                    </h5>
                                    <div className="card-text">
                                        {event.ciudad}
                                    </div>
                                    <div>{event.descripcion}</div>
                                    <div>
                                        {event.musicoId[0].nombreArtistico}
                                    </div>
                                    <img src={event.musicoId[0].imagenMusico} />
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
                                                    res.data.data.links[1].href
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
                        ))}
                        <div>
                            {eventsProgress.map((event) => {
                                console.log('lin97', event)
                                return (
                                    <section className="card">
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                {
                                                    event.musicoId[0]
                                                        .nombreArtistico
                                                }
                                            </h5>
                                            <img
                                                src={
                                                    event.musicoId[0]
                                                        .imagenMusico
                                                }
                                                alt=""
                                            />
                                            <p class="card-text">
                                                {event.descripcion}
                                            </p>
                                            <div>{event.ciudad}</div>
                                            <div></div>
                                            <a href="#" class="btn btn-primary">
                                                Evento cumplido
                                            </a>
                                        </div>

                                        <div></div>
                                    </section>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
