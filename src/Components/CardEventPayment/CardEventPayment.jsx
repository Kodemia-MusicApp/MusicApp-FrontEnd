import React from 'react'
import { AppContext } from '../../Context/AppContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './CardEventPayment.scss'

export const CardEventPayment = ({ event }) => {
    const Context = React.useContext(AppContext)

    return (
        <section className="tarjeta">
            <article className="card">
                <div>
                    <p className="textcard2">
                        GRUPO/ARTISTA: {event.musicoId[0].nombreArtistico}
                    </p>
                    <hr className="hr"></hr>
                </div>
                <div className='card-title"'>
                    <p className="textcard1">
                        <strong>DATOS EVENTO: </strong>
                    </p>
                    <p className="textcard1">
                        {' '}
                        <strong>Tipo de evento:</strong>
                        &nbsp; {event.descripcion}
                    </p>
                </div>
                <div className="card-text">
                    <p className="textcard1">
                        <strong>Calle:</strong>
                        &nbsp;&nbsp; {event.calle}
                    </p>
                    <p className="textcard1">
                        <strong>Colonia:</strong>
                        &nbsp; {event.colonia}
                    </p>
                    <p className="textcard1">
                        <strong>Ciudad: </strong>
                        &nbsp;
                        {event.ciudad}
                    </p>
                    <p className="textcard1">
                        <strong>Dia:</strong>&nbsp;{' '}
                        {event.fechaInicio.slice(0, 10)}
                    </p>
                    <p className="textcard1">
                        <strong>Hora: </strong>
                        &nbsp; De {event.horaInicio} a {event.horaFinalizacion}
                    </p>
                </div>

                <img src={event.musicoId[0].imagenMusico} className="musicoImg"/>
            </article>

            <button
                className="BotonGeneral3"
                onClick={() => {
                    //   console.log(event)
                    axios
                        .post(`${Context.api.apiUrl}/payment/create-payments`, {
                            price: `${event.pago}`,
                            custom_id: `${event._id}`,
                        })
                        .then((res) => {
                            //window.open(res.data.data.links[1].href )
                            window.location.href = res.data.data.links[1].href
                        })
                }}
            >
                REALIZAR PAGO DEL SERVICIO
            </button>
        </section>
    )
}
