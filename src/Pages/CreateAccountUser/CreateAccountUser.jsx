import React from 'react'
import './CreateAccountUser.scss'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'
import axios from 'axios'
import { AppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'

export const CreateAccountUser = () => {
    const [user, setUser] = React.useState(null)
    const context = React.useContext(AppContext)
    const navigate = useNavigate()

    const handleAccount = (e) => {
        e.preventDefault()
        // console.log('lin25', user)
        axios
            .post(`${context.api.apiUrl}clients`, {
                name: user.name,
                lastname: user.lastname,
                secondlastname: user.secondlastname,
                email: user.email,
                password: user.password,
            })
            .then((response) => {
                //console.log(response)
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
    //console.log(user)
    return (
        <section  className="bodyCreateAccountUser">
            <Navbar />
            <div className="CreateAccountUser">
                <div className="CreateAccountUser-Container">
                    
                    
                    <div className="CreateAccountUserFormulario">
                  
                        <form className="CreateAccountUserForm">
                        <p className="Login-Title">CREAR CUENTA COMO CLIENTE</p>
                        <p className="Bienvenida1">Bienvenido a</p>
                         <p className="Bienvenida2">tu músico ahora</p>
                            <label className="labelCreateUse">Nombre</label>
                            <input
                                type="text"
                                className="createUser"
                                onChange={({ target }) => {
                                    setUser({ ...user, name: target.value })
                                }}
                            />

                            <label className="labelCreateUse">
                                Apellido paterno
                            </label>
                            <input
                                type="text"
                                className="createUser"
                                onChange={({ target }) => {
                                    setUser({ ...user, lastname: target.value })
                                }}
                            />

                            <label className="labelCreateUse">
                                Apellido materno
                            </label>
                            <input
                                type="text"
                                className="createUser"
                                onChange={({ target }) => {
                                    setUser({
                                        ...user,
                                        secondlastname: target.value,
                                    })
                                }}
                            />

                            <label className="labelCreateUse">
                                Escribe tu e-mail
                            </label>
                            <input
                                type="text"
                                className="createUser"
                                onChange={({ target }) => {
                                    setUser({ ...user, email: target.value })
                                }}
                            />

                            <label className="labelCreateUse">
                                Escribe una contraseña
                            </label>
                            <input
                                type="password"
                                className="createUser"
                                onChange={({ target }) => {
                                    setUser({ ...user, password: target.value })
                                }}
                            />

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
