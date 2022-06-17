import React from 'react'
import './EditProfileMusician.scss'
import { Navbar } from '../../Components/Navbar/Navbar'
export const EditProfileMusician = () => {
    return (
        <div>
            <Navbar />
            <div className="EditProfileUser">
                <div className="EditProfileUser-container">
                    <p className="Login-Title">EDITAR MI PERFIL MÚSICO</p>
                    <div className="EditProfileUser-content">
                        <div className="EditProfileUserFormulario">
                            <form className="EditProfileUserForm">
                            <p className="NombreApp1">TumusAh</p>
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
                                    <div className="diasdisponibles">
                                        <p className="labelhours">Dias disponibles para servicio</p>
                                        <label className='labelDates'>De</label>
                                        <select
                                            className="Tipoartista"
                                            id="Tipoartista"
                                        >
                                            <option value="Lunes">Lunes</option>
                                            <option value="Martes">
                                                Martes
                                            </option>
                                            <option value="Miércoles">
                                                Miércoles
                                            </option>
                                            <option value="Jueves">
                                                Jueves
                                            </option>
                                            <option value="Viernes">
                                                Viernes
                                            </option>
                                            <option value="Sábado">
                                                Sábado
                                            </option>
                                            <option value="Domingo">
                                                Domingo
                                            </option>
                                        </select>
                                        <label className='labelDates'> a </label>
                                        <select
                                            className="Tipoartista"
                                            id="Tipoartista"
                                        >
                                            <option value="Lunes">Lunes</option>
                                            <option value="Martes">
                                                Martes
                                            </option>
                                            <option value="Miércoles">
                                                Miércoles
                                            </option>
                                            <option value="Jueves">
                                                Jueves
                                            </option>
                                            <option value="Viernes">
                                                Viernes
                                            </option>
                                            <option value="Sábado">
                                                Sábado
                                            </option>
                                            <option value="Domingo">
                                                Domingo
                                            </option>
                                        </select>
                                    </div>

                                    <div className="diasdisponibles">
                                        <p className="labelhours">Horas disponibles para servicio</p>
                                        <label className='labelDates'>De</label>
                                        <select
                                            className="Tipoartista"
                                            id="Tipoartista"
                                        >
                                            <option value="0">0</option>
                                            <option value="1am">1am</option>
                                            <option value="2am">2am</option>
                                            <option value="3am">3am</option>
                                            <option value="4am">4am</option>
                                            <option value="5am">5am</option>
                                            <option value="6am">6am</option>
                                            <option value="7am">7am</option>
                                            <option value="8am">9am</option>
                                            <option value="10am">10am</option>
                                            <option value="11am">11am</option>
                                            <option value="12am">12am</option>
                                            <option value="1pm">1pm</option>
                                            <option value="2pm">1pm</option>
                                            <option value="3pm">3pm</option>
                                            <option value="4pm">4pm</option>
                                            <option value="5pm">5pm</option>
                                            <option value="6pm">6pm</option>
                                            <option value="7pm">7pm</option>
                                            <option value="8pm">8pm</option>
                                            <option value="9pm">9pm</option>
                                            <option value="10pm">10pm</option>
                                            <option value="11pm">11pm</option>
                                            <option value="12pm">12pm</option>
                                        </select>
                                        <label className='labelDates'> a </label>
                                        <select
                                            className="Tipoartista"
                                            id="Tipoartista"
                                        >
                                            <option value="0">0</option>
                                            <option value="1am">1am</option>
                                            <option value="2am">2am</option>
                                            <option value="3am">3am</option>
                                            <option value="4am">4am</option>
                                            <option value="5am">5am</option>
                                            <option value="6am">6am</option>
                                            <option value="7am">7am</option>
                                            <option value="8am">9am</option>
                                            <option value="10am">10am</option>
                                            <option value="11am">11am</option>
                                            <option value="12am">12am</option>
                                            <option value="1pm">1pm</option>
                                            <option value="2pm">1pm</option>
                                            <option value="3pm">3pm</option>
                                            <option value="4pm">4pm</option>
                                            <option value="5pm">5pm</option>
                                            <option value="6pm">6pm</option>
                                            <option value="7pm">7pm</option>
                                            <option value="8pm">8pm</option>
                                            <option value="9pm">9pm</option>
                                            <option value="10pm">10pm</option>
                                            <option value="11pm">11pm</option>
                                            <option value="12pm">12pm</option>
                                        </select>
                                    </div>
                                </div>
                                <label className="banddescription">
                                    Descripción de la agrupación o servicio
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
