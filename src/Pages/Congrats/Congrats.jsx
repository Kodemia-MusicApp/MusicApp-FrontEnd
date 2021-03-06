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
                        <div className="CongratsTitles">
                            <p className="Contrats-Title0">GRACIAS </p>
                            <p className="Contrats-Title">POR CONTRATAR</p>
                            <p className="Contrats-Title">CON</p>
                            <p className="Contrats-Title2">tu músico ahora</p>
                        </div>
                    </div>
                    <div>
                        <p className="datatext">Grupo reservado: Fusión</p>
                        <p>24 de Junio de 1pm a 3 am</p>
                    </div>
                    <div className="congratsMessage">
                        {' '}
                        Puedes ver los detalles de tus grupos reservados en tu
                        perfil
                    </div>
                    <Link to="/userprofile">
                        <button className="BotonGeneral">IR A MI PERFIL</button>
                    </Link>
                    <Link to="/">
                        <button className="BotonGeneral">
                            {' '}
                            IR A LA PAGINA PRINCIPAL
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
