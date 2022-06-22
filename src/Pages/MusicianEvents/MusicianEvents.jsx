import React from 'react'
import { AppContext } from '../../Context/AppContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import { MusicianPaidEvents } from '../../Components/MusicianPaidEvents/MusicianPaidEvents'
import { NavbarOp2 } from '../../Components/Navbar/NavbarOp2'
import { CardAcceptedEvent } from '../../Components/CardAcceptedEvent/CardAcceptedEvent'

export const MusicianEvents = () => {
    const Context = React.useContext(AppContext)
    const [events, setEvents] = React.useState([])
    const [eventsAccepted, seteventsAccepted] = React.useState([])
    const [Loading, setLoading] = React.useState(true)
    const token = localStorage.getItem('musicAppToken')
    const [showAlertAccept, setShowAlertAccept] = React.useState(false)
    const [showAlertRefused, setShowAlertRefused] = React.useState(false)

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
        axios
            .get(`${Context.api.apiUrl}/event/musician/progress`, {
                headers: {
                    token: token,
                },
            })
            .then((res) => {
                seteventsAccepted(res.data.payload)
            })

        setLoading(false)
    }, [])
    console.log(eventsAccepted)
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
                            {events.map((event, key) => (
                                <CardAcceptedEvent
                                    key={key}
                                    event={event}
                                    setShowAlertRefused={setShowAlertRefused}
                                    setShowAlertAccept={setShowAlertAccept}
                                />
                            ))}
                        </div>
                        <div>
                            <h2>Otros eventos</h2>
                            {eventsAccepted.map((event, key) => {
                                return (
                                    <MusicianPaidEvents
                                        event={event}
                                        key={key}
                                    />
                                )
                            })}
                        </div>
                    </section>
                </main>
            )}
        </>
    )
}
