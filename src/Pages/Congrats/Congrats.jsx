import React from 'react'
import './Congrats.scss'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'

export const Congrats = () => {
    return (
        <div>
            <Navbar />
            <div className="Congrats">
                <div className="Congrats-container">
                    <div className="Congrats-content">
                        <p className="Login-Title">GRACIAS </p>
                        <p className="Login-Title">POR CONTRATAR</p>
                        <p className="Login-Title">CON</p>
                        <p className="Login-Title"> tu músico ahora </p>
                    </div>
                    <div>
                        <p>Grupo reservado: Fusión</p>
                        <p>24 de Junio de 1pm a 3 am</p>
                    </div>
                    <div>
                        {' '}
                        Puedes ver los detalles de tus grupos reservados en tu
                        perfil
                    </div>
                </div>
                <div>
                    <button>IR A MI PERFIL</button>
                    <button>IR A MI PERFIL</button>
                </div>
            </div>
        </div>
    )
}
