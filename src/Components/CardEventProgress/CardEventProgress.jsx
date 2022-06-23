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
                <img src={event.musicoId[0].imagenMusico} alt="" className='fotoMusico' />
                    <div className="card-title2">
                        <p className="textcard2">
                            {event.musicoId[0].nombreArtistico}
                        </p>
                    </div>
                    <section className='sectiontextmusico'>
                    <p className="textcard1">
                        <strong> Tipo de evento:</strong> {event.descripcion}
                    </p>
                    <div>
                        {' '}
                        <p className="textcard1">
                            {' '}
                            <strong>Ciudad: </strong> {event.ciudad}
                        </p>
                        <p className="textcard1">
                            <strong>Calle: </strong>
                            &nbsp;&nbsp; {event.calle}
                        </p>
                        <p className="textcard1">
                            <strong>Colonia:</strong>
                            &nbsp; {event.colonia}
                        </p>
                        <p className="textcard1">
                            <strong>Ciudad:</strong>
                            &nbsp;
                            {event.ciudad}
                        </p>
                        <p className="textcard1">
                            <strong>Día: </strong>
                            &nbsp; {event.fechaInicio}
                        </p>
                        <p className="textcard1">
                            <strong>Hora: </strong>
                            &nbsp; De {event.horaInicio} a{' '}
                            {event.horaFinalizacion}
                        </p>
                    </div>
                    </section>
                    <button className="BotonGenera4"
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
                        
                    >
                        EVENTO CUMPLIDO
                    </button>
                    <button
                        className="BotonGenera4"
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
