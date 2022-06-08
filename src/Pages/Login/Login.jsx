import React, { useContext, useEffects } from 'react'
import './Login.scss'
import { AppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Login = () => {
    const [user, setUser] = React.useState(null)
    const navigate = useNavigate()
    const Context = useContext(AppContext)

    const handleUser = (e) => {
        e.preventDefault()
        console.log(user)
        axios
            .post(`${Context.api.apiUrl}auth/login/clients`, {
                correo: user.email,
                password: user.password,
            })
            .then((response) => {
                if (response.data.success == true) {
                    localStorage.setItem(
                        response.data.payload[1].id,
                        response.data.payload[0].token
                    )
                    Context.setUserId(response.data.payload[1].id)
                }
            })
            .catch((error) => {
                console.log(error.response.data.success)
            })
    }
    return (
        <div className="Login">
            <div className="Login-Container">
                <p className="Login-Title">INICIAR SESIÓN COMO CLIENTE</p>

                <form className="Login-Form">
                    <label>Correo electronico</label>
                    <input
                        type="text"
                        onChange={({ target }) => {
                            setUser({
                                ...user,
                                email: target.value,
                            })
                        }}
                        className="input-mail"
                    />

                    <p>Contraseña</p>
                    <input
                        type="password"
                        onChange={({ target }) => {
                            setUser({
                                ...user,
                                password: target.value,
                            })
                        }}
                        className="input-password"
                    />

                    <p className="Login-footer">
                        ¿No tiene contraseña? Crear cuenta
                    </p>
                    <button onClick={handleUser}>Entrar</button>
                </form>
            </div>
        </div>
    )
}
