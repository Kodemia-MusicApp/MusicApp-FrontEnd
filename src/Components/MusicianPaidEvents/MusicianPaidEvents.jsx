import { border } from '@mui/system'
import React from 'react'
import './MusicianPaidEvents.scss'

export const MusicianPaidEvents = ({ event }) => {
    return (
        <div className="MusicianPaidEvents">
            <div className="MusicianPaidEvents-Container">
                <div className="MusicianPaidEvents-Content">
                    <div className="cardMusicianPaidEvents">
                        <p className="reservedtext">DATOS DEL CLIENTE</p>
                        <p className="reservedtext">
                            Titulo del evento: {event.titulo}
                        </p>
                        <p className="reservedtext">
                            Cliente: {event.clienteId[0].name}
                        </p>
                        <p className="reservedtext">
                            Direccion: {`${event.colonia} ${event.numero}`}
                        </p>
                        <p className="reservedtext">
                            Ciudad: {event.clienteId[0].estado}
                        </p>
                        <p className="reservedtext">
                            Fecha: 23 junio de 1 pm a 8pm
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
