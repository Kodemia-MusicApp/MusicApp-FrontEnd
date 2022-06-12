import React, { useContext, useEffects } from 'react'
import './LoginMusician.scss'
import { AppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'
import axios from 'axios'

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
                    <p className="LoginMusician-Title">
                        INICIAR SESIÓN COMO MÚSICO
                    </p>

                    <form className="LoginMusician-Form">
                        <label>Correo electronico</label>
                        <input
                            type="text"
                            className="input-mail"
                            onChange={({ target }) => {
                                setUser({ ...user, correo: target.value })
                            }}
                        />

                        <p>Contraseña</p>
                        <input
                            type="password"
                            className="input-password"
                            onChange={({ target }) => {
                                setUser({ ...user, password: target.value })
                            }}
                        />

                        <p className="LoginMusician-footer">
                            ¿No tiene contraseña? Crear cuenta
                        </p>
                        <button onClick={handleUser}>Entrar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
