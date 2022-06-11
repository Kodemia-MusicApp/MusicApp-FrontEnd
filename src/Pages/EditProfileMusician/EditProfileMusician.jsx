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

                                <div className="disponibilidad">
                                    <p>Dias disponibles para servicio</p>
                                    <label>De</label>
                                    <select
                                        className="Tipoartista"
                                        id="Tipoartista"
                                    >
                                        <option value="Lunes">Lunes</option>
                                        <option value="Martes">Martes</option>
                                        <option value="Miércoles">
                                            Miércoles
                                        </option>
                                        <option value="Jueves">Jueves</option>
                                        <option value="Viernes">Viernes</option>
                                        <option value="Sábado">Sábado</option>
                                        <option value="Domingo">Domingo</option>
                                    </select>
                                    <label> a </label>
                                    <select
                                        className="Tipoartista"
                                        id="Tipoartista"
                                    >
                                        <option value="Lunes">Lunes</option>
                                        <option value="Martes">Martes</option>
                                        <option value="Miércoles">
                                            Miércoles
                                        </option>
                                        <option value="Jueves">Jueves</option>
                                        <option value="Viernes">Viernes</option>
                                        <option value="Sábado">Sábado</option>
                                        <option value="Domingo">Domingo</option>
                                    </select>
                                </div>
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
