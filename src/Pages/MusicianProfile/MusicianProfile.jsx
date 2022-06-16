import React from 'react'
import './MusicianProfile.scss'
import { Navbar } from '../../Components/Navbar/Navbar'
import { CardNewEvents } from '../../Components/CardNewEvents/CardNewEvents'
import { CardScheduledEvents } from '../../Components/CardScheduledEvents/CardScheduledEvents'
import { AppContext } from '../../Context/AppContext'
import axios from 'axios'

export const MusicianProfile = () => {
    const Context = React.useContext(AppContext)
    const [musician, setMusician] = React.useState([])
    const [events, setEvents] = React.useState([])
    const [Loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const token = localStorage.getItem('musicAppToken')
        axios
            .get(`${Context.api.apiUrl}musician`, {
                headers: {
                    token: token,
                },
            })
            .then((res) => {
                setMusician(res.data.payload[0])
                setLoading(false)
            })
    }, [])
    return (
        <div>
            <Navbar />
            {Loading ? (
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div className="MusicianProfile text-white">
                    <div className="MusicianProfile-container">
                        <div className="MusicianProfile-content"></div>
                        <p className="Login-Title">MI PERFIL MÚSICO</p>
                        <div className="imageMusician">
                            <img
                                src="https://cdn0.bodas.com.mx/vendor/2013/3_2/960/jpg/fusion2_5_122013.jpeg"
                                alt=""
                                className="imagenMusico"
                            />
                        </div>

                        <div className="camposMusico">
                            <div className="musicianData">
                                <p className="dataTitles">DATOS GRUPO</p>
                                <p className="datatext">
                                    Nombre: {musician.nombreArtistico}
                                </p>
                                <p className="datatext">
                                    Género: {musician.genero}
                                </p>
                                <p className="datatext">
                                    Zona de covertura: {musician.state}
                                </p>
                            </div>
                            <div className="serviceDays">
                                <p className="dataTitles">
                                    DIAS Y HORARIOS DE SERVICIO
                                </p>
                                <p className="datatext">
                                    {musician.horarioDiaUno} de{' '}
                                    {musician.horarioDiaDos}
                                </p>
                                <p className="datatext">
                                    {`${musician.horarioInicio} hrs a ${musician.horarioFin} hrs`}
                                </p>
                            </div>
                            <div className="musicianDescription">
                                <p className="dataTitles">DESCRIPCIÓN</p>
                                <p className="datatext">
                                    {musician.descripcion}
                                </p>
                            </div>
                            <div className="newShows">
                                <p className="dataTitles1">
                                    EVENTOS EN ESPERA DE ACEPTACIÓN
                                </p>
                            </div>
                            <div className="furtherShows">
                                <p className="dataTitles1">
                                    MIS EVENTOS AGENDADOS
                                </p>
                                <CardScheduledEvents />
                                <CardScheduledEvents />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
