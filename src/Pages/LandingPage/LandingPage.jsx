import React from 'react'
import './LandingPage.scss'
import { Navbar } from '../../Components/Navbar/Navbar'
import { CardLogo } from '../../Components/CardLogo/CardLogo'
import { CardMusician } from '../../Components/CardMusician/CardMusician'
import axios from 'axios'
import { AppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'

export const LandingPage = () => {
    const Context = React.useContext(AppContext)
    const [musico, setMusico] = React.useState([])
    const navigate = useNavigate()

    React.useEffect(() => {
        const token = localStorage.getItem('musicAppToken')
        axios.get(`${Context.api.apiUrl}musician/all`).then((res) => {
            setMusico(res.data.payload)
        })

        axios
            .get(`${Context.api.apiUrl}event/client/eventAccept`, {
                headers: {
                    token: token,
                },
            })
            .then((res) => {
                console.log(res.data.payload)
                if (res.data.payload) {
                    alert('Tu Evento Fue aceptado')
                    navigate('reservationaccepted')
                }
            })
    }, [])

    return (
        <div className="landingContainer">
            <Navbar />
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
