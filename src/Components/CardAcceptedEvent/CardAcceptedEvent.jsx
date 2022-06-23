import React from 'react'
import { AppContext } from '../../Context/AppContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './CardAcceptedEvent.scss'

export const CardAcceptedEvent = ({
    event,
    setShowAlertRefused,
    setShowAlertAccept,
}) => {
    const Context = React.useContext(AppContext)
    const token = localStorage.getItem('musicAppToken')
    const navigate = useNavigate()
    return (
        <div class="col-4 card-accepted-event-container">
            <h2>{event.titulo}</h2>
            <div className='text-card-container'>
                <h4>{event.clienteId[0].name}</h4>
                <p>{event.descripcion}</p>
            </div>

            <section className='buttons-container'>
                <button
                    type="button"
                    class="button-denegade-style1"
                    onClick={() => {
                        axios
                            .patch(
                                `${Context.api.apiUrl}/event/update/${event._id}`,
                                { status: 'rechazado' },
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
                                    navigate('/userprofile')
                                }
                            })
                    }}
                >
                    Rechazar
                </button>
                <button
                    className="button-acept-style1"
                    onClick={() => {
                        axios
                            .patch(
                                `${Context.api.apiUrl}/event/update/${event._id}`,
                                { status: 'aceptado' },
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
                                    navigate('/userprofile')
                                }
                            })
                    }}
                >
                    Aceptar
                </button>
            </section>
        </div>
    )
}
