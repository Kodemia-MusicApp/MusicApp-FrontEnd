import React from 'react'
import './LandingPage.scss'
import { Navbar } from '../../Components/Navbar/Navbar'
import { CardLogo } from '../../Components/CardLogo/CardLogo'

export const LandingPage = () => {
    return (
        <div className="landingContainer">
            <Navbar />
            <CardLogo />
        </div>
    )
}
