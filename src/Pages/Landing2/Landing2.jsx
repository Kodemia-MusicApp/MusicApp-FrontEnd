import React from 'react';
import './Landing2.scss';
import { CarouselComp } from '../../Components/Carousel/CarouselComp';
import { NavbarOp2 } from '../../Components/Navbar/NavbarOp2';
import { MusicianCardXL } from '../../Components/MusicianCardXL/MusicianCardXL';
import { FamousPhrase } from '../../Components/FamousPhrase/FamousPhrase';
import { FooterPage } from '../../Components/FooterPage/FooterPage';
import Eminem from './img/Eminem.jpg';
import Penta from './img/Penta.jpg';
import Lindsey from './img/Lindsey.jpg';
import TwoFeet from './img/TwoFeet.jpg';

export const Landing2 = () => {
    return (
        <div style={{backgroundColor: '#01172f'}}>
            <NavbarOp2 />
            <CarouselComp />
            <div className='FamousPhrase-Container'>
                <FamousPhrase />
            </div>
            <div className='MusicianCards-Container'>
                <MusicianCardXL src={Eminem} title='Eminem' text='Contratame para tus XV años'/>
                <MusicianCardXL src={Penta} title='Imagine Dragons' text='Disponibles todos los dias de 10 am a 11pm'/>
                <MusicianCardXL src={Lindsey} title='Lindsey Stirling' text='Un poco de musica clasica combinada con el mejor Dubstep'/>
                <MusicianCardXL src={TwoFeet} title='Two Feet' text='Musica alternativa para amenizar cualquier tipo de evento familiar o no'/>
            </div>
            <FooterPage />
        </div>
    )
}
