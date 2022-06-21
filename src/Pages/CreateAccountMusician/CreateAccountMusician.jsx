import React from 'react'
import './CreateAccountMusician.scss'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'
import { AppContext } from '../../Context/AppContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { NavbarOp2 } from '../../Components/Navbar/NavbarOp2'
export const CreateAccountMusician = () => {
    const [user, setUser] = React.useState(null)
    const context = React.useContext(AppContext)
    const navigate = useNavigate()
    const handleAccount = (e) => {
        e.preventDefault()
        axios
            .post(`${context.api.apiUrl}/musician`, {
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
            <NavbarOp2 />
            <div className="CreateAccountMusician">
                <div className="CreateAccountMusician-Container">
                <div className="CreateAccountMusicianFormulario">
                    <div className='left-container'>
                    <div className="shot1"> <img src='https://images.pexels.com/photos/5862809/pexels-photo-5862809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='foto1'/></div>             
                    <div className="shot1"> <img src='https://images.pexels.com/photos/11794657/pexels-photo-11794657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  className='foto1'/></div>
                    <div className="shot1"> <img src='https://images.pexels.com/photos/11794660/pexels-photo-11794660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='foto1' /></div>

                  </div>
                        <form className="CreateAccountMusicianForm">
                            <p className="Login-Title">
                                CREAR CUENTA COMO MÚSICO
                            </p>
                            <p className="Bienvenida">Bienvenido a</p>
                            <p className="NombreApp1">TumusAh</p>
                            <label className="labelCreateMusician">
                                Nombre
                            </label>
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

                            <label className="labelCreateMusician">
                                Apellido paterno
                            </label>
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

                            <label className="labelCreateMusician">
                                Apellido materno
                            </label>
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

                            <label className="labelCreateMusician">
                                Nombre artistico
                            </label>
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
                                  
                            <label className="labelCreateMusician">
                                Escribe tu e-mail
                            </label>
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

                            <label className="labelCreateMusician">
                                Escribe una contraseña
                            </label>
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

                            
                            <button
                                className="BotonGeneral"
                                onClick={handleAccount}
                            >
                                CREAR CUENTA
                            </button>
                        </form>
                        <div className='left-container'>
                    <div className='quote1'><p>Soy músico </p>
                    </div>
                    <div className='quote1'>toco almas</div>
                    <div className='quote2'>Tumusah</div>
                </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
