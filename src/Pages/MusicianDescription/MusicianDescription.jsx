import React from 'react'
import { ReserveButton } from '../../Components/ReserveButton/ReserveButton'
import './MusicianDescription.scss'
import { Navbar } from '../../Components/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { AppContext } from '../../Context/AppContext'

export const MusicianDescription = () => {
    const { id } = useParams()
    const Context = React.useContext(AppContext)
    const [musico, setMusico] = React.useState([])
    const [Loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        axios.get(`${Context.api.apiUrl}musician/id/${id}`).then((res) => {
            setMusico(res.data.payload)
            setLoading(false)
        })
    }, [])

    return (
        <section>
            <Navbar />
            {Loading ? (
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div className="page-container">
                    <h3 className="title">{musico[0].nombreArtistico}</h3>
                    <div className="group-container">
                        <div className="img-info-container">
                            <img
                                className="img-musician"
                                src={musico[0].imagenMusico}
                                alt="img-musician"
                            />
                            <div className="info-group-container">
                                <span>{musico[0].nombreArtistico}</span>
                                <span>{musico[0].genero}</span>
                                <ReserveButton />
                            </div>
                        </div>
                        <div className="price-city-container">
                            <span>${musico[0].cobroPorHora}/hora</span>
                            <span>Guadalajara</span>
                        </div>
                    </div>
                    <div className="complementary-info">
                        <div className="times">
                            <h5>Días y Horas de Servicio</h5>
                            <p>
                                {musico[0].horarioDiaUno} de{' '}
                                {musico[0].horarioInicio} a{' '}
                                {musico[0].horarioFin}
                                {` ${musico[0].horarioDiaDos}`}
                            </p>
                        </div>
                        <div className="about-group">
                            <p className="fw-bold">ACERCA DE</p>
                            <span>{musico[0].descripcion}</span>
                        </div>
                        <div className="videos">
                            Aqui se mostraran los videos personales del grupo
                        </div>
                        <div className="link-videos">
                            <a href="">Link YouTube</a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
