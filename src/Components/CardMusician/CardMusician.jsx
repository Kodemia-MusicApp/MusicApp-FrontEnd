import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CardMusician = ({ musico }) => {
    const navigate = useNavigate()
    return (
        <div>
            <section className="d-flex my-5 d-flex justify-content-center">
                <article className=" col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-3 ">
                    <img
                        className="w-75 rounded"
                        src={musico.imagenMusico}
                        alt=""
                        onClick={() => {
                            navigate(`/musician/description/${musico.id}`)
                        }}
                    />
                </article>
                <article className="col-4 d-flex flex-column justify-content-center justify-content-evenly">
                    <div
                        className="fw-bold fs-4"
                        onClick={() => {
                            navigate(`/musician/description/${musico.id}`)
                        }}
                    >
                        {musico.nombreArtistico}
                    </div>
                    <div className="fw-normal">{musico.genero}</div>
                    <section className="d-flex justify-content-between">
                        <div className="font-monospace">
                            $ {musico.cobroPorHora}
                        </div>
                        <div className="fst-italic">{musico.estado}</div>
                    </section>
                </article>
            </section>
        </div>
    )
}
