import React from 'react'
import './MusicianProfile.scss'
import { Navbar } from '../../Components/Navbar/Navbar'
import { CardNewEvents } from '../../Components/CardNewEvents/CardNewEvents'
import { CardScheduledEvents } from '../../Components/CardScheduledEvents/CardScheduledEvents'
import { AppContext } from '../../Context/AppContext'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { NavbarOp2 } from '../../Components/Navbar/NavbarOp2'

export const MusicianProfile = () => {
    const Context = React.useContext(AppContext)
    const [musician, setMusician] = React.useState([])
    const [events, setEvents] = React.useState([])
    const [Loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const token = localStorage.getItem('musicAppToken')
        axios
            .get(`${Context.api.apiUrl}/musician`, {
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
            <NavbarOp2 />
            {Loading ? (
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div className="MusicianProfile text-white">
                    <div className="MusicianProfile-container">
                        <div className="MusicianProfile-content"></div>
                        <p className="profileMusicianTitle">MI PERFIL MÚSICO</p>
                        <div className="imageMusician">
                            <img
                                src="https://cdn0.bodas.com.mx/vendor/2013/3_2/960/jpg/fusion2_5_122013.jpeg"
                                alt=""
                                className="imagenMusico"
                            />
                        </div>

                        <div className="camposMusico">
                            <div className="musicianData">
                                <div>
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
                                <div className="linkeditprofile">
                                    <Link
                                        to="/editprofilemusician"
                                        className="linktoeditmusician"
                                    >
                                        <p>
                                            EDITAR PERFIL{' '}
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 19 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M12.586 0.99988C12.9611 0.624937 13.4697 0.414307 14 0.414307C14.5303 0.414307 15.0389 0.624937 15.414 0.99988L18 3.58588C18.3749 3.96093 18.5856 4.46955 18.5856 4.99988C18.5856 5.53021 18.3749 6.03882 18 6.41388L16.414 7.99988L11 2.58588L12.586 0.99988ZM9.586 3.99988L0.586 12.9999C0.210901 13.3749 0.000113275 13.8835 0 14.4139V16.9999C0 17.5303 0.210714 18.039 0.585786 18.4141C0.960859 18.7892 1.46957 18.9999 2 18.9999H4.586C5.11639 18.9998 5.62501 18.789 6 18.4139L15 9.41388L9.586 3.99988Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </p>
                                    </Link>
                                </div>
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
