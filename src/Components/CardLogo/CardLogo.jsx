import React from 'react'
import './CardLogo.scss'
import img1 from './Images/ImgCantante.jpg'
import { ButtonCreateAccount } from '../../Components/ButtonCreateAccount/ButtonCreateAccount'
import { ButtonLogin } from '../ButtonLogin/ButtonLogin'

export const CardLogo = () => {
    return (
        <div className="">
            <section className=" d-flex">
                <img src={img1} alt="sample" className="col-6" />
                <div className="">
                    <h2>
                        La conexion con el talento musical estes donde estes.
                    </h2>
                    <ButtonCreateAccount />
                    <ButtonLogin />
                </div>
            </section>
        </div>
    )
}
