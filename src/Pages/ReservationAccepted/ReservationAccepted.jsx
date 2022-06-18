import React from 'react'
import './ReservationAccepted.scss'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ReservationCard } from '../../Components/ReservationCard/ReservationCard'
import { CardNewEvents } from '../../Components/CardNewEvents/CardNewEvents'
import { NavbarOp2 } from '../../Components/Navbar/NavbarOp2'
import { Divider } from '@mui/material'

export const ReservationAccepted = () => {
    const [eventsAccepted, setEventsAccepted] = React.useState([])
    const [eventsProgress, setEventsProgress] = React.useState([])
    const Context = React.useContext(AppContext)
    const navigate = useNavigate()

    React.useEffect(() => {
        const token = localStorage.getItem('musicAppToken')
        axios
            .get(`${Context.api.apiUrl}/event/client/accepted`, {
                headers: {
                    token: token,
                },
            })
            .then((res) => {
                setEventsAccepted(res.data.payload)
            })
        axios
            .get(`${Context.api.apiUrl}/event/client/progress`, {
                headers: {
                    token: token,
                },
            })
            .then((res) => {
                setEventsProgress(res.data.payload)
            })
    }, [])

    return (
        <div>
            <NavbarOp2 />
            <div className="ReservationAccepted">
                <div className="ReservationAccepted-container">
                    <div className="ReservationAccepted-content">
                        <p className="InicioSesion-Title">
                            AGENDA DE EVENTOS
                            <p className="NombreApp1">TumusAh</p>
                        </p>
                       
                        {eventsAccepted.map((event, key) => (
                            <section className='tarjeta'>
                                <article className="card">
                                    <div >
                                        <p className='textcard2'>GRUPO/ARTISTA: {event.musicoId[0].nombreArtistico}</p>
                                    </div>
                                    <div className='card-title"'>
                                    <p className='textcard'><strong>DATOS EVENTO: </strong></p>   
                                       <p className='textcard'> <strong>Tipo de evento:</strong>&nbsp; {event.descripcion}</p>    
                                        
                                    </div>
                                    <div className="card-text">

                                       <p className='textcard'><strong>Calle:</strong>&nbsp;&nbsp; {event.calle}</p>
                                       <p className='textcard'><strong>Colonia:</strong>&nbsp; {event.colonia}</p>
                                       <p className='textcard'><strong>Ciudad: </strong>&nbsp;{event.ciudad}</p>
                                       <p className='textcard'><strong>Dia:</strong>&nbsp; {event.fechaInicio}</p>
                                       <p className='textcard'><strong>Hora: </strong>&nbsp; De {event.horaInicio} a {event.horaFinalizacion}</p>
                                    </div>

                                
                                    <img src={event.musicoId[0].imagenMusico} />
                                </article>

                                <button
                                    className="BotonGeneral"
                                    onClick={() => {
                                        //   console.log(event)
                                        axios
                                            .post(
                                                `${Context.api.apiUrl}/payment/create-payments`,
                                                {
                                                    price: 500,
                                                    custom_id: `${event._id}`,
                                                }
                                            )
                                            .then((res) => {
                                                console.log(
                                                    res.data.data.links[1].href
                                                )
                                                //window.open(res.data.data.links[1].href )
                                                window.location.href =
                                                    res.data.data.links[1].href
                                            })
                                    }}
                                >
                                    REALIZAR PAGO DEL SERVICIO
                                </button>
                            </section>
                        ))}
                        <div>
                            {eventsProgress.map((event) => {
                                console.log('lin97', event)
                                return (
                                    <div className='tarjeta2'>
                                    <section className="card">
                                        <div class="card-body">
                                            <div class="card-title">
                                                <p className='textcard2'>{
                                                    event.musicoId[0]
                                                        .nombreArtistico
                                                }</p>
                                            </div>
                                            <img
                                                src={
                                                    event.musicoId[0]
                                                        .imagenMusico
                                                }
                                                alt=""
                                            />
                                            <p className='textcard'>
                                              <strong> Tipo de evento:</strong>  {event.descripcion}
                                            </p>
                                            <div> <p className='textcard'> <strong>Ciudad: </strong>  {event.ciudad}</p>
                                            <p className='textcard'><strong>Calle: </strong>&nbsp;&nbsp; {event.calle}</p>
                                            <p className='textcard'><strong>Colonia:</strong>&nbsp; {event.colonia}</p>
                                            <p className='textcard'><strong>Ciudad:</strong>&nbsp;{event.ciudad}</p>
                                            <p className='textcard'><strong>Día: </strong>&nbsp; {event.fechaInicio}</p>
                                            <p className='textcard'><strong>Hora: </strong>&nbsp; De {event.horaInicio} a {event.horaFinalizacion}</p>
                                            
                                            </div>
                                            
                                            <a href="#" class="btn btn-primary">
                                                Evento cumplido
                                            </a>
                                        </div>

                                        <div></div>
                                    </section>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
