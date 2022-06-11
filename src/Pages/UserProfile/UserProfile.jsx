import React from 'react'
import './UserProfile.scss'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'

export const UserProfile = () => {
    return (
        <section>
            <Navbar />
            <div className="UserProfile">
                <div className="UserProfile-Container">
                    <p className="Login-Title">CREAR CUENTA COMO MÚSICO</p>

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

                            <label className="tipoArtista">Tipo de artista</label>
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
