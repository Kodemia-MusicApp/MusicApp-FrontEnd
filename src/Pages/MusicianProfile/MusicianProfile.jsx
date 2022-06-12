import React from 'react'
import './MusicianProfile.scss'
import { Navbar } from '../../Components/Navbar/Navbar'

export const MusicianProfile = () => {
    return (
      <div>
        <Navbar/>
        <div className="MusicianProfile">
          <div className="MusicianProfile-container">
            <div className="MusicianProfile-content"></div>
          </div>
        </div>
      </div>
    )
}
