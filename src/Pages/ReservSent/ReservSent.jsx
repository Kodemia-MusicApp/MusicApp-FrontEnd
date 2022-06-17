import React from 'react';
import './ReservSent.scss';
import { ButtonRose } from '../../Components/ButtonRose/ButtonRose';

export const ReservSent = () => {
    return (
        <div className='card-container'>
            <div className='first-card'>
                <h2>Tu solicitud de contratacion ha sido enviada.</h2>
            </div>
            <div className='second-card'>
                <h5>Te mandaremos una notificación una vez que el musico acepte el servicio.</h5>
            </div>
            <ButtonRose />
        </div>
    )
}