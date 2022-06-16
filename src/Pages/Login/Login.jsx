import React, { useContext } from 'react'
import './Login.scss'
import { AppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
export const Login = () => {
    const [user, setUser] = React.useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate()
    const Context = useContext(AppContext)

    const handleUser = (e) => {
        e.preventDefault()
        axios
            .post(`${Context.api.apiUrl}auth/login/clients`, {
                correo: user.email,
                password: user.password,
            })
            .then((response) => {
                if (response.data.success === true) {
                    localStorage.setItem(
                        'musicAppToken',
                        response.data.payload[0].token
                    )
                    Context.setUserId(response.data.payload[0])
                    navigate('/')
                }
            })
            .catch((error) => {
                console.log(error.response.data.success)
            })
    }
    return (
        <section>
            <Navbar />
            <div className="Login">
                <div className="Login-Container">
                    

                    <form className="Login-Form">
                    
                    <p className="NombreApp1">TumusAh</p>
                        <label className='labelloginmail'>Correo electronico</label>
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

                        <label  className='labelloginmail'>Contraseña</label>
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
                            ¿No tiene contraseña?  &nbsp; 
                            
                            <Link to ="/crearcuenta" className='linktocreateaccount'> Crear cuenta</Link>
                        </p>
                        <button onClick={handleUser} className="BotonGeneral">ENTRAR</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
