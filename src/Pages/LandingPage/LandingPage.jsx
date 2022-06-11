import React from 'react'
import './LandingPage.scss'
import { Navbar } from '../../Components/Navbar/Navbar'
import { CardLogo } from '../../Components/CardLogo/CardLogo'
import { CardMusician } from '../../Components/CardMusician/CardMusician'

export const LandingPage = () => {
    return (
        <div className="landingContainer">
            <Navbar />
            <CardLogo />
            <section className="d-flex justify-content-center">
                <article className="">
                    <CardMusician />
                </article>
            </section>
        </div>
    )
}
