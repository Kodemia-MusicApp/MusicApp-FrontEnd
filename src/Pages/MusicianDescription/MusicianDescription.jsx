import React from 'react';
import { ButtonRose } from '../../Components/ButtonRose/ButtonRose';
import './MusicianDescription.scss';

export const MusicianDescription = () => {
    return (
        <div className='page-container'>
            <h3 className='title'>INFORMACIÓN DEL GRUPO</h3>
            <div className='group-container'>
                <div className='img-info-container'>
                    <img className='img-musician' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmYeGr8-oxntSGzVkT5ra5KUfT65ShaR9CQ&usqp=CAU" alt="img-musician" />
                    <div className='info-group-container'>
                        <span>Musico: Snoop Dogg</span>
                        <span>Hip-Hop</span>
                        <ButtonRose />
                    </div>
                </div>
                <div className='price-city-container'>
                    <span>$50,000/hora</span>
                    <span>Guadalajara</span>
                </div>
            </div>
            <div className='complementary-info'>
                <div className='times'>
                    <h5>Días y Horas de Servicio</h5>
                    <p>Sabados de 2:00 pm a 5:00 am</p>
                    <p>Domingos de 2:00 pm a 5:00 am</p>
                </div>
                <div className='about-group'>
                    <p>ACERCA DE</p>
                    <span>Lorem ipsum. Velit ab, voluptatibus quas reiciendis eveniet nam. Doloremque nemo, reiciendis laborum fugit ipsum sint temporibus asperiores modi?</span>
                </div>
                <div className='videos'>
                    Aqui se mostraran los videos personales del grupo
                </div>
                <div className='link-videos'>
                    <a href="">Link YouTube</a>
                </div>
            </div>
        </div>
    )
}