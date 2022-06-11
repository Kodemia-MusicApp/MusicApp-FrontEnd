import React from 'react'
import './EditProfileMusician.scss'
import { Navbar } from '../../Components/Navbar/Navbar'
export const EditProfileMusician = () => {
    return (
        <div>
            <Navbar />
            <div className="EditProfileUser">
                <div className="EditProfileUser-container">
                    <p className="Login-Title">EDITAR MI PERFIL</p>
                    <div className="EditProfileUser-content">
                        <div className="EditProfileUserFormulario">
                            <form className="EditProfileUserForm">
                                <label className="labelCreateUse">Nombre</label>
                                <input type="text" className="editUser" />

                                <label className="labelCreateUse">
                                    Apellido paterno
                                </label>
                                <input type="text" className="editUser" />

                                <label className="labelCreateUse">
                                    Apellido materno
                                </label>
                                <input type="text" className="editUser" />

                                <label className="labelCreateUse">Ciudad</label>
                                <input type="text" className="editUser" />

                                <label className="labelCreateUse">
                                    Escribe una contraseña
                                </label>
                                <input type="password" className="editUser" />

                                <button className="BotonGeneral">
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
