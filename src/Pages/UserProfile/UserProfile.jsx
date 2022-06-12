import React from 'react'
import './UserProfile.scss'
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'
import { ReservationCard } from '../../Components/ReservationCard/ReservationCard'
import '../../Icons/pen.svg'
export const UserProfile = () => {
    return (
        <section>
            <Navbar />
            <div className="UserProfile">
                <div className="UserProfile-Container">
                    <div className="UserProfile-Content">
                        <p className="Login-Title">MI PERFIL CLIENTE</p>

                        <div className="datos">
                            <div className="MisDatos">
                                <div className=" MisDatos-container">
                                    <p>MIS DATOS</p>
                                    <p className="name">Nombre: Carlos Doe</p>
                                    <p className="city">Ciudad: CDMX</p>
                                    <img src="../../Icons/pen.svg" alt="" />
                                </div>
                                <div className="textEditProfile">
                                    <Link to="/editprofileuser">
                                    <p>

                                        EDITAR PERFIL{' '}
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 19 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12.586 0.99988C12.9611 0.624937 13.4697 0.414307 14 0.414307C14.5303 0.414307 15.0389 0.624937 15.414 0.99988L18 3.58588C18.3749 3.96093 18.5856 4.46955 18.5856 4.99988C18.5856 5.53021 18.3749 6.03882 18 6.41388L16.414 7.99988L11 2.58588L12.586 0.99988ZM9.586 3.99988L0.586 12.9999C0.210901 13.3749 0.000113275 13.8835 0 14.4139V16.9999C0 17.5303 0.210714 18.039 0.585786 18.4141C0.960859 18.7892 1.46957 18.9999 2 18.9999H4.586C5.11639 18.9998 5.62501 18.789 6 18.4139L15 9.41388L9.586 3.99988Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="Rerservations">
                            <p className="reservationsTitle">
                                MIS RESERVACIONES
                            </p>
                            <div className="reservationcards">
                                <ReservationCard />
                                <ReservationCard />
                                <ReservationCard />
                                <ReservationCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
