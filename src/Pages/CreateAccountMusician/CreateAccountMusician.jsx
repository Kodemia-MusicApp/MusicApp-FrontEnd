import React from 'react'
import './CreateAccountMusician.scss'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'
import { AppContext } from '../../Context/AppContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const CreateAccountMusician = () => {
    const [user, setUser] = React.useState(null)
    const context = React.useContext(AppContext)
    const navigate = useNavigate()
    const handleAccount = (e) => {
        e.preventDefault()
        axios
            .post(`${context.api.apiUrl}musician`, {
                nombre: user.nombre,
                apellidoPaterno: user.apellidoPaterno,
                apellidoMaterno: user.apellidoMaterno,
                correo: user.correo,
                contrasenia: user.contrasenia,
            })
            .then((response) => {
                if (response.data.success === true) {
                    localStorage.setItem(
                        'musicAppToken',
                        response.data.payload[0].token
                    )
                    navigate('/')
                    context.setUserId(response.data.payload[0])
                }
            })
    }

    return (
        <section>
            <Navbar />
            <div className="CreateAccountMusician">
                <div className="CreateAccountMusician-Container">
                    <p className="Login-Title">CREAR CUENTA COMO MÚSICO</p>

                    <p className="Bienvenida1">Bienvenido a</p>
                    <p className="Bienvenida2">tu músico ahora</p>
                    <div className="CreateAccountMusicianFormulario">
                        <form className="CreateAccountMusicianForm">
                            <label>Nombre</label>
                            <input
                                type="text"
                                className="createMusician"
                                onChange={({ target }) => {
                                    setUser({
                                        ...user,
                                        nombre: target.value,
                                    })
                                }}
                            />

                            <label>Apellido paterno</label>
                            <input
                                type="text"
                                className="createMusician"
                                onChange={({ target }) => {
                                    setUser({
                                        ...user,
                                        apellidoPaterno: target.value,
                                    })
                                }}
                            />

                            <label>Apellido materno</label>
                            <input
                                type="text"
                                className="createMusician"
                                onChange={({ target }) => {
                                    setUser({
                                        ...user,
                                        apellidoMaterno: target.value,
                                    })
                                }}
                            />

                            <label>Nombre artistico</label>
                            <input
                                type="text"
                                className="createMusician"
                                onChange={({ target }) => {
                                    setUser({
                                        ...user,
                                        nombreArtistico: target.value,
                                    })
                                }}
                            />

                            <label>Escribe tu e-mail</label>
                            <input
                                type="text"
                                className="createMusician"
                                onChange={({ target }) => {
                                    setUser({
                                        ...user,
                                        correo: target.value,
                                    })
                                }}
                            />

                            <label>Escribe una contraseña</label>
                            <input
                                type="password"
                                className="createMusician"
                                onChange={({ target }) => {
                                    setUser({
                                        ...user,
                                        contrasenia: target.value,
                                    })
                                }}
                            />

                            <label className="tipoArtista">
                                Tipo de artista
                            </label>
                            <select className="Tipoartista" id="Tipoartista">
                                <option
                                    value="Cantante"
                                    onChange={({ target }) => {
                                        setUser({
                                            ...user,
                                            tipoMusico: target.value,
                                        })
                                    }}
                                >
                                    Cantante
                                </option>
                                <option value="">Instrumentista</option>
                            </select>
                            <button
                                className="BotonGeneral"
                                onClick={handleAccount}
                            >
                                CREAR CUENTA
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
