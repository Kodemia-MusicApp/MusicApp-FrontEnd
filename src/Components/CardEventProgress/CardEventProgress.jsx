import React from 'react'
import { AppContext } from '../../Context/AppContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './CardEventProgress.scss'

export const CardEventProgress = ({
    event,
    setShowAlertRefused,
    setShowAlertAccept,
}) => {
    const Context = React.useContext(AppContext)
    const navigate = useNavigate()
    const token = localStorage.getItem('musicAppToken')
    return (
        <div className="tarjeta2">
            <section className="card">
                <div className="card-body">
                    <div className="card-title">
                        <p className="textcard2">
                            {event.musicoId[0].nombreArtistico}
                        </p>
                    </div>
                    <img src={event.musicoId[0].imagenMusico} alt="" />
                    <p className="textcard">
                        <strong> Tipo de evento:</strong> {event.descripcion}
                    </p>
                    <div>
                        {' '}
                        <p className="textcard">
                            {' '}
                            <strong>Ciudad: </strong> {event.ciudad}
                        </p>
                        <p className="textcard">
                            <strong>Calle: </strong>
                            &nbsp;&nbsp; {event.calle}
                        </p>
                        <p className="textcard">
                            <strong>Colonia:</strong>
                            &nbsp; {event.colonia}
                        </p>
                        <p className="textcard">
                            <strong>Ciudad:</strong>
                            &nbsp;
                            {event.ciudad}
                        </p>
                        <p className="textcard">
                            <strong>Día: </strong>
                            &nbsp; {event.fechaInicio}
                        </p>
                        <p className="textcard">
                            <strong>Hora: </strong>
                            &nbsp; De {event.horaInicio} a{' '}
                            {event.horaFinalizacion}
                        </p>
                    </div>

                    <button
                        onClick={() => {
                            axios
                                .patch(
                                    `${Context.api.apiUrl}/event/update/${event._id}`,
                                    {
                                        status: 'cumplido',
                                    },
                                    {
                                        headers: {
                                            token: token,
                                        },
                                    }
                                )
                                .then((res) => {
                                    if (res.data.success === true) {
                                        setShowAlertAccept(true)
                                        setTimeout(() => {
                                            navigate('/')
                                        }, 1500)
                                    } else {
                                        alert('Error')
                                    }
                                })
                        }}
                        className="BotonGeneral2"
                    >
                        EVENTO CUMPLIDO
                    </button>
                    <button
                        className="BotonGeneral2"
                        onClick={() => {
                            axios
                                .patch(
                                    `${Context.api.apiUrl}/event/update/${event._id}`,
                                    {
                                        status: 'noCumplido',
                                    },
                                    {
                                        headers: {
                                            token: token,
                                        },
                                    }
                                )
                                .then((res) => {
                                    if (res.data.success === true) {
                                        setShowAlertRefused(true)
                                        setTimeout(() => {
                                            navigate('/')
                                        }, 1500)
                                    } else {
                                        alert('Error')
                                    }
                                })
                        }}
                    >
                        EVENTO NO CUMPLIDO
                    </button>
                </div>

                <div></div>
            </section>
        </div>
    )
}
