import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import { AppContext } from '../../Context/AppContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import { MusicianPaidEvents } from '../../Components/MusicianPaidEvents/MusicianPaidEvents'
import { NavbarOp2 } from '../../Components/Navbar/NavbarOp2'

export const MusicianEvents = () => {
    const Context = React.useContext(AppContext)
    const [events, setEvents] = React.useState([])
    const [eventsAccepted, seteventsAccepted] = React.useState([])
    const [Loading, setLoading] = React.useState(true)
    const token = localStorage.getItem('musicAppToken')
    const [showAlertAccept, setShowAlertAccept] = React.useState(false)
    const [showAlertRefused, setShowAlertRefused] = React.useState(false)
    const navigate = useNavigate()

    React.useEffect(() => {
        const token = localStorage.getItem('musicAppToken')
        axios
            .get(`${Context.api.apiUrl}/event/musician`, {
                headers: {
                    token: token,
                },
            })
            .then((res) => {
                setEvents(res.data.payload)
            })

        setLoading(false)
    }, [])
    console.log(events)
    return (
        <>
            <NavbarOp2 />
            {Loading ? (
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            ) : (
                <main>
                    <Alert show={showAlertAccept} variant="success">
                        <Alert.Heading>Evento aceptado!</Alert.Heading>
                    </Alert>
                    <Alert show={showAlertRefused} variant="danger">
                        <Alert.Heading>Evento Rechazado!</Alert.Heading>
                    </Alert>
                    <section className="text-white">
                        <div className="d-flex flex-wrap">
                            {events.map((event) => (
                                <div class="col-4">
                                    <h2>{event.titulo}</h2>
                                    <h4>{event.clienteId[0].name}</h4>
                                    <p>{event.descripcion}</p>

                                    <section>
                                        <button
                                            type="button"
                                            class="btn btn-outline-danger"
                                            onClick={() => {
                                                axios
                                                    .patch(
                                                        `${Context.api.apiLocal}/event/update/${event._id}`,
                                                        { status: 'rechazado' },
                                                        {
                                                            headers: {
                                                                token: token,
                                                            },
                                                        }
                                                    )
                                                    .then((res) => {
                                                        if (
                                                            res.data.success ===
                                                            true
                                                        ) {
                                                            setShowAlertRefused(
                                                                true
                                                            )
                                                            setTimeout(() => {
                                                                navigate('/')
                                                            }, 1500)
                                                        } else {
                                                            alert('Error')
                                                            navigate(
                                                                '/userprofile'
                                                            )
                                                        }
                                                    })
                                            }}
                                        >
                                            Rechazar
                                        </button>
                                        <button
                                            className="btn btn-outline-success"
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
                                                        if (
                                                            res.data.success ===
                                                            true
                                                        ) {
                                                            setShowAlertAccept(
                                                                true
                                                            )
                                                            setTimeout(() => {
                                                                navigate('/')
                                                            }, 1500)
                                                        } else {
                                                            alert('Error')
                                                            navigate(
                                                                '/userprofile'
                                                            )
                                                        }
                                                    })
                                            }}
                                        >
                                            Aceptar
                                        </button>
                                    </section>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h2>Otros eventos</h2>
                            <MusicianPaidEvents />
                            <MusicianPaidEvents />
                        </div>
                    </section>
                </main>
            )}
        </>
    )
}
