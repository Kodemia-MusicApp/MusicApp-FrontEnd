import { border } from '@mui/system'
import React from 'react'
import './MusicianPaidEvents.scss'

<<<<<<< HEAD
export const MusicianPaidEvents = (props) => {
    return (
        <div className='Paid-Events-Container'>
            <div className='Client-Name-Container'>
                <img className='Client-img' src='' />
                <h3>Nombre del Cliente</h3>
            </div>
            <div className='Event-Data-Container'>
                <div className='Data-Label-Container'>
                    <span>Tipo de Evento:</span>
                    <span>Cliente:</span>
                    <span>Dirección:</span>
                    <span>Ciudad:</span>
                </div>
                <div className='Data-Desc-Container'>
                    <span>BODA</span>
                    <span>Julio Ramos</span>
                    <span>Calle Centro #23</span>
                    <span>CDMX</span>
=======
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
>>>>>>> develop
                </div>
            </div>
            <div className='Hour-Event-Container'>
                <p>
                    Horario: 
                    <span className='Text-Orange'>
                        18:00 a 03:00
                    </span>
                </p>
                <p className='Text-Orange'>28/DIC/2022</p>
            </div>
        </div>
    )
}
