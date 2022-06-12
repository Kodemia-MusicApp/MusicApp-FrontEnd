import React from 'react'
import './MusicianProfile.scss'
import { Navbar } from '../../Components/Navbar/Navbar'

export const MusicianProfile = () => {
    return (
        <div>
            <Navbar />
            <div className="MusicianProfile">
                <div className="MusicianProfile-container">
                    <div className="MusicianProfile-content"></div>
                    <p>MI PERFIL MÚSICO</p>
                    <div>
                        {' '}
                        <img
                            src="https://cdn0.bodas.com.mx/vendor/2013/3_2/960/jpg/fusion2_5_122013.jpeg"
                            alt=""
                        />
                    </div>

                    <div className="musicianData">
                        <p>DATOS GRUPO</p>
                        <p>Nombre: Fusión</p>
                        <p>Género: Cumbia</p>
                        <p>Representante: Jhon Doe</p>
                        <p>Zona de covertura: CDMX</p>
                    </div>
                    <div className="serviceDays">
                        <p>DIAS Y HORARIOS DE SERVICIO</p>
                        <p>Sabados de 1pm a 5am</p>
                        <p>Domingos de 2pm a 3am</p>
                    </div>
                    <div className="musicianDescription">
                      <p>DESCRIPCIÓN</p>
                        <p>
                            Somos un grupo de musica alternativa y cumbia con
                            larga experiencia en conciertos de diferentes
                            eventos como bodas, cumpleaños, fiestas de oficina.{' '}
                        </p>
                    </div>
                    <div className="newShows">
                      <p>EVENTOS EN ESPERA DE ACEPTACIÓN</p>
                    </div>
                    <div className="furtherShows">
                      
                    </div>
                </div>
            </div>
        </div>
    )
}
