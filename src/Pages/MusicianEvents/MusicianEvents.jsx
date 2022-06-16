import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import { AppContext } from '../../Context/AppContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
export const MusicianEvents = () => {
    const Context = React.useContext(AppContext)
    const [events, setEvents] = React.useState([])
    const [Loading, setLoading] = React.useState(true)
    const token = localStorage.getItem('musicAppToken')
    const [showAlertAccept, setShowAlertAccept] = React.useState(false)
    const [showAlertRefused, setShowAlertRefused] = React.useState(false)
    const navigate = useNavigate()

    React.useEffect(() => {
        const token = localStorage.getItem('musicAppToken')
        axios
            .get(`${Context.api.apiUrl}event/musician`, {
                headers: {
                    token: token,
                },
            })
            .then((res) => {
                setEvents(res.data.payload)
                console.log(res.data.payload)
                setLoading(false)
            })
    }, [])

    const handleAcceptEvent = (e) => {
        e.preventDefault()
        axios
            .patch(
                `${Context.api.apiUrl}event/update/${events.event._id}`,
                { aceptado: true },
                {
                    headers: {
                        token: token,
                    },
                }
            )
            .then((res) => {
                console.log(res)
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
    }

    const handleDeclineEvent = (e) => {
        e.preventDefault()
        axios
            .patch(
                `${Context.api.apiUrl}event/update/${events.event._id}`,
                { aceptado: false },
                {
                    headers: {
                        token: token,
                    },
                }
            )
            .then((res) => {
                console.log(res)
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
    }

    return (
        <>
            <Navbar />
            <Alert show={showAlertAccept} variant="success">
                <Alert.Heading>Evento aceptado!</Alert.Heading>
            </Alert>
            <Alert show={showAlertRefused} variant="danger">
                <Alert.Heading>Evento Rechazado!</Alert.Heading>
            </Alert>
            <section className="container">
                <div className="">
                    {events.map((event) => (
                        <div class="col-sm-4">
                            <img
                                class="rounded-circle"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                alt="Generic placeholder image"
                            />
                            <h2>{event.titulo}</h2>
                            <h4>{event.nameClient}</h4>
                            <p>{event.descripcion}</p>

                            <section>
                                {console.log(event)}
                                <button
                                    type="button"
                                    class="btn btn-outline-danger"
                                    onClick={() => {
                                        axios
                                            .patch(
                                                `${Context.api.apiLocal}event/update/${event._id}`,
                                                { cancelado: true },
                                                {
                                                    headers: {
                                                        token: token,
                                                    },
                                                }
                                            )
                                            .then((res) => {
                                                console.log(res)
                                                if (res.data.success === true) {
                                                    console.log(res.data)

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
                                    className="btn btn-outline-success"
                                    onClick={() => {
                                        axios
                                            .patch(
                                                `${Context.api.apiUrl}event/update/${event._id}`,
                                                { aceptado: true },
                                                {
                                                    headers: {
                                                        token: token,
                                                    },
                                                }
                                            )
                                            .then((res) => {
                                                console.log(res)
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
                    ))}
                </div>
                <h2>OTros eventos</h2>
            </section>
        </>
    )
}
