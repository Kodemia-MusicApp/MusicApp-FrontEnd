import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import { AppContext } from '../../Context/AppContext'
import axios from 'axios'

export const MusicianEvents = () => {
    const Context = React.useContext(AppContext)
    const [events, setEvents] = React.useState([])
    const [Loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const token = localStorage.getItem('musicAppToken')
        axios
            .get(`${Context.api.apiUrl}event/musician`, {
                headers: {
                    token: token,
                },
            })
            .then((res) => {
                setEvents(res.data.payload)
                console.log(res.data.payload)
                setLoading(false)
            })
    }, [])
    return (
        <>
            <Navbar />
            <section className="container">
                <div className="row">
                    {events.map((event) => (
                        <div class="col-lg-4">
                            <img
                                class="rounded-circle"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                                alt="Generic placeholder image"
                                width="140"
                                height="140"
                            />
                            {console.log(event)}
                            <h2>{event.titulo}</h2>
                            <h4>{event.nameClient}</h4>
                            <p>{event.descripcion}</p>
                            <p>
                                <a
                                    class="btn btn-secondary"
                                    href="#"
                                    role="button"
                                >
                                    Aceptars »
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
