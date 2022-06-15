import React from 'react'
import './LandingPage.scss'
import { Navbar } from '../../Components/Navbar/Navbar'
import { CardLogo } from '../../Components/CardLogo/CardLogo'
import { CardMusician } from '../../Components/CardMusician/CardMusician'
import axios from 'axios'
import { AppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'

export const LandingPage = () => {
    const Context = React.useContext(AppContext)
    const [musico, setMusico] = React.useState([])
    const navigate = useNavigate()
    const [showClient, setShowClient] = React.useState(false)
    const [showMusician, setShowMusician] = React.useState(false)

    React.useEffect(() => {
        const token = localStorage.getItem('musicAppToken')
        axios.get(`${Context.api.apiUrl}musician/all`).then((res) => {
            setMusico(res.data.payload)
        })
        if (Context.user.typeClient == 'Client') {
            axios
                .get(`${Context.api.apiUrl}event/client/eventAccept`, {
                    headers: {
                        token: token,
                    },
                })
                .then((res) => {
                    if (res.data.payload) {
                        setShowClient(true)
                    }
                })
        }
        if (Context.user.typeClient == 'Musico') {
            axios
                .get(`${Context.api.apiUrl}event/musician/newEvent`, {
                    headers: {
                        token: token,
                    },
                })
                .then((res) => {
                    if (res.data.payload) {
                        setShowMusician(true)
                    }
                })
        }
    }, [])

    return (
        <div className="landingContainer">
            <Navbar />
            <Alert show={showClient} variant="success">
                <Alert.Heading>Evento aceptado!</Alert.Heading>
                <p>
                    El musico acepto tu evento puedes ir a pagar al siguiente
                    boton
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => navigate('reservationaccepted')}
                        variant="outline-success"
                    >
                        Ir a mis eventos
                    </button>
                </div>
            </Alert>
            <Alert show={showMusician} variant="success">
                <Alert.Heading>Tienes nuevos eventos!</Alert.Heading>
                <p>
                    Tienes nuevos eventos puedes aceptarlos dando click en el
                    siguiente boton.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => navigate('musician/events')}
                        variant="outline-success"
                    >
                        Ir a mis eventos
                    </button>
                </div>
            </Alert>
            <CardLogo />
            <section className="d-flex flex-column align-items-center">
                <article className="my-3">
                    <h2>Musicos y cantantes</h2>
                </article>
                <section className="d-flex justify-content-center">
                    <article className="">
                        {musico.map((musico, key) => {
                            return <CardMusician key={key} musico={musico} />
                        })}
                    </article>
                </section>
            </section>
        </div>
    )
}
