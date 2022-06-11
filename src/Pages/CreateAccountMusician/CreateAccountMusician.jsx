import React from 'react'
import './CreateAccountMusician.scss'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
export const CreateAccountMusician = () => {
    const navigate = useNavigate()
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
                            <input type="text" className="createMusician" />

                            <label>Apellido paterno</label>
                            <input type="text" className="createMusician" />

                            <label>Apellido materno</label>
                            <input type="text" className="createMusician" />

                            <label>Nombre artistico</label>
                            <input type="text" className="createMusician" />

                            <label>Escribe tu e-mail</label>
                            <input type="text" className="createMusician" />

                            <label>Escribe una contraseña</label>
                            <input type="password" className="createMusician" />

                            <label className="tipoArtista">
                                Tipo de artista
                            </label>
                            <select className="Tipoartista" id="Tipoartista">
                                <option value="Cantante">Cantante</option>
                                <option value="">Instrumentista</option>
                            </select>
                            <button className="BotonGeneral">
                                CREAR CUENTA
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
