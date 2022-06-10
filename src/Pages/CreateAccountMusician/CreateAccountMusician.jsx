import React from 'react'
import './CreateAccountMusician.scss'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'

export const CreateAccountMusician = () => {
    return (
        <div>
            <Navbar />
            <div className="CreateAccount">
                <div className="CreateAccount-Container">
                    <p className="CreateAccount-Title">CREAR CUENTA</p>
                    <p className="Bienvenida">Bienvenido a</p>
                    <p className="NombreApp">tu musico ahora</p>
                </div>
            </div>
        </div>
    )
}
