import React from 'react'
import './Reservation.scss'
import { Navbar } from '../../Components/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import axios from 'axios'
import { AppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import { NavbarOp2 } from '../../Components/Navbar/NavbarOp2'

export const Reservation = () => {
    const Context = React.useContext(AppContext)
    const token = localStorage.getItem('musicAppToken')
    const navigate = useNavigate()
    const { id } = useParams()
    const [loading, setLoading] = React.useState(true)
    const [event, setEvent] = React.useState(null)
    const [dayOne, setdayOne] = React.useState(new Date())
    const [dayTwo, setdayTwo] = React.useState(new Date())
    const [show, setShow] = React.useState(false)

    const handleChangeDayOne = (newdayOne) => {
        setdayOne(newdayOne)
    }

    const handleChangeDayTwo = (newdayTwo) => {
        setdayTwo(newdayTwo)
    }

    const createEvent = (e) => {
        e.preventDefault()

        const dateOne = new Date(dayOne)
        const dateTwo = new Date(dayTwo)
        const hourOne = `${dateOne.getHours()}:${dateOne.getMinutes()}`
        const hourTwo = `${dateTwo.getHours()}:${dateTwo.getMinutes()}`
        const parseDayOne = Date.parse(dayOne)
        const parseDayTwo = Date.parse(dayTwo)

        if (parseDayOne == parseDayTwo || parseDayOne > parseDayTwo) {
            alert('Horas incorrectas')
        } else {
            axios
                .post(
                    `${Context.api.apiUrl}/event`,
                    {
                        descripcion: event.descripcion,
                        fechaInicio: Date.parse(dayOne),
                        horaInicio: hourOne,
                        fechaFinalizacion: Date.parse(dayTwo),
                        horaFinalizacion: hourTwo,
                        musicoId: id,
                        colonia: event.colonia,
                        calle: event.calle,
                        numero: event.calle,
                        ciudad: event.ciudad,
                        titulo: event.titulo,
                    },
                    {
                        headers: {
                            token: token,
                        },
                    }
                )
                .then((res) => {
                    if (res.data.success === true) {
                        setShow(true)
                        setTimeout(() => {
                            navigate('/reservationaccepted')
                        }, 1500)
                    } else {
                        alert('Error')
                        navigate('/userprofile')
                    }
                })
        }
        /*
         */
    }
    return (
        <div>
            <NavbarOp2 />
            <section>
                <Alert show={show} variant="success">
                    <Alert.Heading className="d-flex justify-content-center">
                        Evento creado
                    </Alert.Heading>
                    <div className="d-flex justify-content-center">
                        <p>El evento fue creado y enviado al musico</p>
                    </div>
                </Alert>
            </section>
            <div className="Reservation text-white">
                <div className="Reservation-Container">
                    <p className="Login-Title">RESERVACIÓN</p>
                    <div className="Reservation-Content">
                        <div className="reservationData">
                            <p className="dataTitles">DATOS GRUPO/ARTISTA</p>
                            <p className="datatext">Grupo: Unido</p>
                            <p className="datatext">Area de covertura: CDMX</p>
                            <p className="datatext">
                                Género: Música alternativa
                            </p>
                        </div>
                        <form>
                            <p className="dataTitles2">Titulo del evento</p>
                            <input
                                type="text"
                                className="inputReservation"
                                onChange={({ target }) => {
                                    setEvent({
                                        ...event,
                                        titulo: target.value,
                                    })
                                }}
                            />
                            <label className="labelreservation">
                                Descripción del evento
                            </label>
                            <input
                                type="text"
                                className="inputReservation"
                                onChange={({ target }) => {
                                    setEvent({
                                        ...event,
                                        descripcion: target.value,
                                    })
                                }}
                            />
                            <p className="dataTitles">DIRECCIÓN DEL EVENTO</p>
                            <label className="labelreservation">Colonia</label>
                            <input
                                type="text"
                                className="inputReservation"
                                onChange={({ target }) => {
                                    setEvent({
                                        ...event,
                                        colonia: target.value,
                                    })
                                }}
                            />

                            <label className="labelreservation">Calle</label>
                            <input
                                type="text"
                                className="inputReservation"
                                onChange={({ target }) => {
                                    setEvent({
                                        ...event,
                                        calle: target.value,
                                    })
                                }}
                            />

                            <label className="labelreservation">Número</label>
                            <input 
                            
                                type="text"
                                className="inputReservation"
                                onChange={({ target }) => {
                                    setEvent({
                                        ...event,
                                        numero: target.value,
                                    })
                                }}
                            />

                            <label className="labelreservation">Ciudad y/o Municipio</label>
                            <input
                                type="text"
                                className="inputReservation"
                                onChange={({ target }) => {
                                    setEvent({
                                        ...event,
                                        ciudad: target.value,
                                    })
                                }}
                            />
                            <section className='calendar'>
                                <p className="dataTitles2">
                                    Dia y hora de inicio
                                </p>
                                <div className="my-3 text-white">
                                    <LocalizationProvider 
                                        dateAdapter={AdapterDateFns}
                                    >
                                        <Stack spacing={3}>
                                            <DateTimePicker
                                            
                                                label="Date&Time picker"
                                                value={dayOne}
                                                onChange={handleChangeDayOne}
                                                renderInput={(params) => (
                                                    <TextField {...params} />
                                                )}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                </div>
                                <p className="dataTitles2">
                                    Dia y hora de finalizacion
                                </p>
                                <div className="my-3" >
                                    <LocalizationProvider 
                                        dateAdapter={AdapterDateFns}
                                    >
                                        <Stack spacing={3}>
                                            <DateTimePicker
                                            
                                                label="Date&Time picker"
                                                value={dayTwo}
                                                onChange={handleChangeDayTwo}
                                                renderInput={(params) => (
                                                    <TextField {...params} />
                                                )}
                                            />
                                        </Stack>
                                    </LocalizationProvider>
                                </div>
                            </section>
                            <button
                                className="BotonGeneral"
                                onClick={createEvent}
                            >
                                RESERVAR EVENTO
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
