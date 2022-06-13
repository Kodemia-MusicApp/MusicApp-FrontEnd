import React from 'react'
import './Payment.scss'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'

export const Payment = () => {
    return (
        <div>
            <div className="Payment">
                <div className="Payment-container">
                    <div className="Payment-content">
                        <p className="Login-Title">PAGO DE RESERVACIÓN</p>
                        <div className="artistReservedData">
                            <p>DATOS ARTISTA</p>
                            <p>Grupo reservado: Fusión</p>
                            <p>Area de covertura: CDMX</p>
                            <p>Dia: 24 de Febrero </p>
                            <p>Hora: De 1pm a 2am</p>
                            <p>Costo Total: 6000$MXN</p>
                        </div>

                        <div>
                            <p>DIRECCIN DEL EVENTO</p>
                            <p>Calle: Petunias</p>
                            <p>Colonia: Regenración</p>
                            <p>Numero: 23</p>
                            <p>Municipio: Iztapalapa</p>
                            <p>Ciudad: CDMX</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
