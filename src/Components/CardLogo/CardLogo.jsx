import React from 'react'
import './CardLogo.scss'
import { ButtonCreateAccount } from '../../Components/ButtonCreateAccount/ButtonCreateAccount'
import { ButtonLogin } from '../ButtonLogin/ButtonLogin'
import { AppContext } from '../../Context/AppContext'

const urlImg =
    'https://img.freepik.com/foto-gratis/retrato-cantante-femenina-aislado-pared-azul-estudio-luz-neon_155003-29655.jpg?t=st=1654732899~exp=1654733499~hmac=c4720997a31e1d70a537a8b74c47642c4e4e4debb3fc069bffe0798c7078efb9&w=996'

export const CardLogo = () => {
    const Context = React.useContext(AppContext)
    return (
        <div className="">
            <section className=" d-flex justify-content-evenly my-5">
                <img src={urlImg} alt="sample" className="w-25 rounded col-8" />
                <div className="col-4">
                    <h2>
                        La conexion con el talento musical estes donde estes.
                    </h2>
                    <article>
                        {Context.user.name !== '' ? (
                            <></>
                        ) : (
                            <ButtonCreateAccount />
                        )}
                        {Context.user.name !== '' ? <></> : <ButtonLogin />}
                    </article>
                </div>
            </section>
        </div>
    )
}
