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
                        <p>Dias y horarios de servicio</p>
                        <p>Sabados de 1pm a 5am</p>
                        <p>Domingos de 2pm a 3am</p>
                        
                    </div>
                    <div className="musicianDescription"></div>
                    <div className="newShows"></div>
                    <div className="fuertherShows"></div>
                </div>
            </div>
        </div>
    )
}
