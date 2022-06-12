import React from 'react'
import './CardNewEvents.scss'
export const CardNewEvents = () => {
    return (
        <div className="CardNewEvents">
            <div className="CardNewEvents-container">
                <div className="CardNewEvents-content">
                    <div className="cardEventonuevo">
                        <p className="newEventText">Cliente: Carlos Doe</p>
                        <p className="newEventText"> Tipo de evento: Boda</p>
                        <p className="newEventText">
                            Dirección: Calle aztecas #35 Col. Narvaez Entidad:
                            Iztapalapa CDMX
                        </p>
                        <p className="newEventText">Marzo de 5pm a 2am </p>
                        <form className="newEventButtons">
                            <button className="acceptEventbtn">ACEPTAR</button>
                            <button className="rejectEventbtn">RECHAZAR</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}