import React, { useContext, useEffects } from 'react'
import './LoginMusician.scss'
import { AppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const LoginMusician = () => {
    const [user, setUser] = React.useState(null)
    const navigate = useNavigate()
    const context = React.useContext(AppContext)

    const handleUser = (e) => {
        e.preventDefault()
        axios
            .post(`${context.api.apiUrl}auth/login/musician`, {
                correo: user.correo,
                password: user.password,
            })
            .then((res) => {
                if (res.data.success === true) {
                    localStorage.setItem(
                        'musicAppToken',
                        res.data.payload[0].token
                    )
                    navigate('/')
                    context.setUserId(res.data.payload[0])
                }
            })
    }

    return (
        <section>
            <Navbar />
            <div className="LoginMusician">
                <div className="LoginMusician-Container">
                    <p className="Login-Title">
                        INICIAR SESIÓN COMO MÚSICO
                    </p>

                    <form className="LoginMusician-Form">
                    <p className="NombreApp1">TumusAh</p>
                        <label className='labelloginmusician'>Correo electronico</label>
                        <input
                            type="text"
                            className="input-mail"
                            onChange={({ target }) => {
                                setUser({ ...user, correo: target.value })
                            }}
                        />

                        <label className='labelloginmusician'>Contraseña</label>
                        <input
                            type="password"
                            className="input-password"
                            onChange={({ target }) => {
                                setUser({ ...user, password: target.value })
                            }}
                        />

                        <p className="Login-footer">
                            ¿No tiene contraseña? &nbsp; 
                            <Link to ="/crearcuenta" className='linktocreateaccount'>Crear cuenta</Link>
                        </p>
                        <button onClick={handleUser} className="BotonGeneral">ENTRAR</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
