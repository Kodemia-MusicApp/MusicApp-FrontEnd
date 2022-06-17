import React from 'react'
import './EditProfileUser.scss'
import { Navbar } from '../../Components/Navbar/Navbar'
import { AppContext } from '../../Context/AppContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { NavbarOp2 } from '../../Components/Navbar/NavbarOp2'

export const EditProfileUser = () => {
    const Context = React.useContext(AppContext)
    const navigate = useNavigate()
    const token = localStorage.getItem('musicAppToken')
    const [user, setUser] = React.useState(null)
    const handleSave = (e) => {
        e.preventDefault()

        console.log('lin15', user)

        axios
            .put(
                `${Context.api.apiUrl}/clients`,
                {
                    name: user.name,
                    secondlastname: user.lastname,
                    lastname: user.secondlastname,
                },
                {
                    headers: {
                        token: token,
                    },
                }
            )
            .then((res) => {
                if (res.data.success) {
                    alert('Cambios Guardados')
                    navigate('/userprofile')
                } else {
                    alert('Error')
                    navigate('/userprofile')
                }
            })
    }
    const handleUser = (e) => {
        e.preventDefault()
        setUser(...user, {
            name: e.value,
        })
    }
    return (
        <div>
            <NavbarOp2 />
            <div className="EditProfileUser">
                <div className="EditProfileUser-container">
                    <p className="Login-Title">EDITAR MI PERFIL</p>
                    <div className="EditProfileUser-content">
                        <div className="EditProfileUserFormulario">
                            <form className="EditProfileUserForm">
                                <label className="labelCreateUse">Nombre</label>
                                <input
                                    type="text"
                                    className="editUser"
                                    onChange={({ target }) => {
                                        setUser({ ...user, name: target.value })
                                    }}
                                />

                                <label className="labelCreateUse">
                                    Apellido paterno
                                </label>
                                <input
                                    type="text"
                                    className="editUser"
                                    onChange={({ target }) => {
                                        setUser({
                                            ...user,
                                            lastname: target.value,
                                        })
                                    }}
                                />

                                <label className="labelCreateUse">
                                    Apellido materno
                                </label>
                                <input
                                    type="text"
                                    className="editUser"
                                    onChange={({ target }) => {
                                        setUser({
                                            ...user,
                                            secondlastname: target.value,
                                        })
                                    }}
                                />

                                <label className="labelCreateUse">Ciudad</label>
                                <input type="text" className="editUser" />

                                <label className="labelCreateUse">
                                    Escribe una contraseña
                                </label>
                                <input type="password" className="editUser" />

                                <button
                                    className="BotonGeneral"
                                    onClick={handleSave}
                                >
                                    GUARDAR CAMBIOS
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
