import React from 'react'
import './MusicianProfile.scss'
import { Navbar } from '../../Components/Navbar/Navbar'
import { CardNewEvents } from '../../Components/CardNewEvents/CardNewEvents'
import { CardScheduledEvents } from '../../Components/CardScheduledEvents/CardScheduledEvents'
import { AppContext } from '../../Context/AppContext'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { NavbarOp2 } from '../../Components/Navbar/NavbarOp2'
import Musico from '../../Components/Musico/Musico'
export const MusicianProfile = () => {
    const Context = React.useContext(AppContext)
    const [musician, setMusician] = React.useState([])
    const [events, setEvents] = React.useState([])
    const [Loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const token = localStorage.getItem('musicAppToken')
        axios
            .get(`${Context.api.apiUrl}/musician`, {
                headers: {
                    token: token,
                },
            })
            .then((res) => {
                setMusician(res.data.payload[0])
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <NavbarOp2 />

            <Musico musician={musician}></Musico>
        </div>
    )
}
