import { border } from '@mui/system'
import React from 'react'
import './MusicianPaidEvents.scss'

export const MusicianPaidEvents = ({ event }) => {
    return (
        <div className="MusicianPaidEvents">
            <div className="MusicianPaidEvents-Container">
                <div className="MusicianPaidEvents-Content">
                    <div className="cardMusicianPaidEvents">
                        <h5 className="text-center">DATOS DEL CLIENTE</h5>
                        <p className="reservedtext">
                            Titulo del evento:&nbsp;
                            <span className="reservedtext-styled">
                                {event.titulo}
                            </span>
                        </p>
                        <p className="reservedtext">
                            Cliente:&nbsp;
                            <span className="reservedtext-styled">
                                {event.clienteId[0].name}
                            </span>
                        </p>
                        <p className="reservedtext">
                            Direccion:&nbsp;
                            <span className="reservedtext-styled">
                                {`${event.colonia} ${event.numero}`}
                            </span>
                        </p>
                        <p className="reservedtext">
                            Ciudad:&nbsp;
                            <span className="reservedtext-styled">
                                {event.clienteId[0].estado}
                            </span>
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
