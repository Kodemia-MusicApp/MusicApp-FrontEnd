import React from 'react'
import './LandingPage.scss'
import { Navbar } from '../../Components/Navbar/Navbar'
import { CardLogo } from '../../Components/CardLogo/CardLogo'
import { CardMusician } from '../../Components/CardMusician/CardMusician'
import axios from 'axios'
import { AppContext } from '../../Context/AppContext'

export const LandingPage = () => {
    const Context = React.useContext(AppContext)
    const [musico, setMusico] = React.useState([])
    React.useEffect(() => {
        axios.get(`${Context.api.apiUrl}musician/all`).then((res) => {
            setMusico(res.data.payload)
        })
    }, [])

    return (
        <div className="landingContainer">
            <Navbar />
            <CardLogo />
            <section className="d-flex flex-column align-items-center">
                <article className="my-3">
                    <h2>Musicos y cantantes</h2>
                </article>
                <section className="d-flex justify-content-center">
                    <article className="">
                        {musico.map((musico) => {
                            return <CardMusician musico={musico} />
                        })}
                    </article>
                </section>
            </section>
        </div>
    )
}
