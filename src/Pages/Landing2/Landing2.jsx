import React from 'react'
import './Landing2.scss'
import { CarouselComp } from '../../Components/Carousel/CarouselComp'
import { NavbarOp2 } from '../../Components/Navbar/NavbarOp2'
import { MusicianCardXL } from '../../Components/MusicianCardXL/MusicianCardXL'
import { FamousPhrase } from '../../Components/FamousPhrase/FamousPhrase'
import { FooterPage } from '../../Components/FooterPage/FooterPage'
import axios from 'axios'
import { AppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'

export const Landing2 = () => {
    const Context = React.useContext(AppContext)
    const [musico, setMusico] = React.useState([])
    const navigate = useNavigate()
    const [showClient, setShowClient] = React.useState(false)
    const [showMusician, setShowMusician] = React.useState(false)
    const [Loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const token = localStorage.getItem('musicAppToken')
        axios.get(`${Context.api.apiUrl}/musician/all`).then((res) => {
            setMusico(res.data.payload)
        })

        if (Context.user.typeClient == 'Client') {
            axios
                .get(`${Context.api.apiUrl}/event/client/eventAccept`, {
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
                .get(`${Context.api.apiUrl}/event/musician/newEvent`, {
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
        setLoading(false)
    }, [])
    return (
        <div style={{ backgroundColor: '#01172f' }}>
            <NavbarOp2 />
            {Loading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <main>
                    <CarouselComp />
                    <Alert show={showClient} variant="success">
                        <Alert.Heading>Evento aceptado!</Alert.Heading>
                        <p>
                            El musico acepto tu evento puedes ir a pagar al
                            siguiente boton
                        </p>
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
                            Tienes nuevos eventos puedes aceptarlos dando click
                            en el siguiente boton.
                        </p>
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
                    <div className="FamousPhrase-Container">
                        <FamousPhrase />
                    </div>
                    <div className="MusicianCards-Container">
                        {musico.map((musico, key) => {
                            return <MusicianCardXL musico={musico} />
                        })}
                    </div>
                </main>
            )}
            <FooterPage />
        </div>
    )
}
