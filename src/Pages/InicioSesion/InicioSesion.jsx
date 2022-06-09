import React from 'react'
import './InicioSesion.scss'

export const InicioSesion = () => {
    return (
        <div className="InicioSesion">
            <div className="InicioSesion-Container">
                <p className="InicioSesion-Title">INICIAR SESIÓN</p>
                <p className="Bienvenida">Bienvenido a</p>
                <p className="NombreApp">tu musico ahora</p>
                <div className="BotonesInicio">
                    <button className="BotonInicio">BUSCO MUSICO</button>
                    <button className="BotonInicio">SOY MUSICO</button>
                </div>
            </div>
        </div>
    )
}
