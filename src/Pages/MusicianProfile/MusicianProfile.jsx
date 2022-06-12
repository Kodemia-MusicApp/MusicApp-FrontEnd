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
                    <p>MI PERFIL MúSICO</p>
                    <div>
                        {' '}
                        <img
                            src="https://cdn0.bodas.com.mx/vendor/2013/3_2/960/jpg/fusion2_5_122013.jpeg"
                            alt=""
                        />
                    </div>

                    <div className="musicianData"></div>
                    <div className="serviceDays"></div>
                    <div className="musicianDescription"></div>
                    <div className="newShows"></div>
                    <div className ="fuertherShows"></div>
                </div>
            </div>
        </div>
    )
}
