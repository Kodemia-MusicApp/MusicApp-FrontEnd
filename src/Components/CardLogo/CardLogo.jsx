import React from 'react'
import './CardLogo.scss'
import img1 from './Images/ImgCantante.jpg'
import { ButtonCreateAccount } from '../../Components/ButtonCreateAccount/ButtonCreateAccount'
import { ButtonLogin } from '../ButtonLogin/ButtonLogin'
const urlImg =
    'https://img.freepik.com/foto-gratis/retrato-cantante-femenina-aislado-pared-azul-estudio-luz-neon_155003-29655.jpg?t=st=1654732899~exp=1654733499~hmac=c4720997a31e1d70a537a8b74c47642c4e4e4debb3fc069bffe0798c7078efb9&w=996'

export const CardLogo = () => {
    return (
        <div className="">
            <section className=" d-flex">
                <img src={urlImg} alt="sample" className="col-6" />
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
