import { border } from '@mui/system'
import React from 'react'
import './MusicianPaidEvents.scss'

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
