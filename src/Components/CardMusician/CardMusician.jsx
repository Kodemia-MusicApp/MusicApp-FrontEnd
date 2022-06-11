import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CardMusician = ({ musico }) => {
    const navigate = useNavigate()

    return (
        <div>
            <section className="d-flex my-5">
                <article className="col-8 d-flex justify-content-center">
                    <img
                        className="w-75 rounded"
                        src="https://concepto.de/wp-content/uploads/2015/03/grupo-1-e1550235718694.jpg"
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
