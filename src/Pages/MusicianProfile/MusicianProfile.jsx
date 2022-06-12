import React from 'react'
import './MusicianProfile.scss'
import { Navbar } from '../../Components/Navbar/Navbar'

import { CardNewEvents } from '../../Components/CardNewEvents/CardNewEvents '
import { CardScheduledEvents } from '../../Components/CardScheduledEvents/CardScheduledEvents'

export const MusicianProfile = () => {
    return (
        <div>
            <Navbar />
            <div className="MusicianProfile">
                <div className="MusicianProfile-container">
                    <div className="MusicianProfile-content"></div>
                    <p className="Login-Title">MI PERFIL MÚSICO</p>
                    <div className="imageMusician">
                        <img
                            src="https://cdn0.bodas.com.mx/vendor/2013/3_2/960/jpg/fusion2_5_122013.jpeg"
                            alt=""
                            className="imagenMusico"
                        />
                    </div>

                    <div className="camposMusico">
                        <div className="musicianData">
                            <p className="dataTitles">DATOS GRUPO</p>
                            <p className="datatext">Nombre: Fusión</p>
                            <p className="datatext">Género: Cumbia</p>
                            <p className="datatext">Representante: Jhon Doe</p>
                            <p className="datatext">Zona de covertura: CDMX</p>
                        </div>
                        <div className="serviceDays">
                            <p className="dataTitles">
                                DIAS Y HORARIOS DE SERVICIO
                            </p>
                            <p className="datatext">Sabados de 1pm a 5am</p>
                            <p className="datatext">Domingos de 2pm a 3am </p>
                        </div>
                        <div className="musicianDescription">
                            <p className="dataTitles">DESCRIPCIÓN</p>
                            <p className="datatext">
                                Somos un grupo de musica alternativa y cumbia
                                con larga experiencia en conciertos de
                                diferentes eventos como bodas, cumpleaños,
                                fiestas de oficina.{' '}
                            </p>
                        </div>
                        <div className="newShows">
                            <p className="dataTitles1">
                                EVENTOS EN ESPERA DE ACEPTACIÓN
                            </p>
                            <CardNewEvents />
                            <CardNewEvents />
                        </div>
                        <div className="furtherShows">
                            <p className="dataTitles1">MIS EVENTOS AGENDADOS</p>
                            <CardScheduledEvents />
                            <CardScheduledEvents />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
