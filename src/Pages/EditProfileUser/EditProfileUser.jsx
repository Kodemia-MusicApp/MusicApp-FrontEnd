import React from 'react'
import './EditProfileUser.scss'
import { Navbar } from '../../Components/Navbar/Navbar'
import { AppContext } from '../../Context/AppContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { NavbarOp2 } from '../../Components/Navbar/NavbarOp2'
import UploadImg from '../../Components/UploadImg/UploadImg'

export const EditProfileUser = () => {
    const Context = React.useContext(AppContext)
    const navigate = useNavigate()
    const token = localStorage.getItem('musicAppToken')
    const [user, setUser] = React.useState(null)
    const [Loading, setLoading] = React.useState(true)
    const [uppy, setUppy] = React.useState()

    const onCompleteUploadFiles = (assembly) => {
        // aqui pueden tomar la url de la imagen para ponerla en un estado y mandarla al API
        const image = assembly.results?.compress_image[0].ssl_url
        console.log(image)
    }

    React.useEffect(() => {
        axios
            .get(`${Context.api.apiUrl}/clients`, {
                headers: {
                    token: token,
                },
            })
            .then((res) => {
                setUser(res.data.payload[0])
                setLoading(false)
            })
    }, [])

    const handleSave = (e) => {
        e.preventDefault()

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
            {Loading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div className="EditProfileUser">
                    <div className="EditProfileUser-container">
                        <p className="Login-Title">EDITAR MI PERFIL</p>
                        <div className="EditProfileUser-content">
                            <div className="EditProfileUserFormulario">
                                <form className="EditProfileUserForm">
                                    <UploadImg />
                                    <label className="labelCreateUse">
                                        Nombre
                                    </label>
                                    <input
                                        value={user.name}
                                        type="text"
                                        className="editUser"
                                        onChange={({ target }) => {
                                            setUser({
                                                ...user,
                                                name: target.value,
                                            })
                                        }}
                                    />

                                    <label className="labelCreateUse">
                                        Apellido paterno
                                    </label>
                                    <input
                                        value={user.lastname}
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
                                        value={user.secondlastname}
                                        type="text"
                                        className="editUser"
                                        onChange={({ target }) => {
                                            setUser({
                                                ...user,
                                                secondlastname: target.value,
                                            })
                                        }}
                                    />

                                    <label className="labelCreateUse">
                                        Ciudad
                                    </label>
                                    <input
                                        value={user.state}
                                        type="text"
                                        className="editUser"
                                        onChange={({ target }) => {
                                            setUser({
                                                ...user,
                                                state: target.value,
                                            })
                                        }}
                                    />

                                    <label className="labelCreateUse">
                                        Escribe una contraseña
                                    </label>
                                    <input
                                        type="password"
                                        className="editUser"
                                    />

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
            )}
        </div>
    )
}
