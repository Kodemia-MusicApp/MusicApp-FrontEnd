import React from 'react'

export const CardMusician = () => {
    return (
        <div>
            <section className="d-flex">
                <article className="col-8 d-flex justify-content-end">
                    <img
                        className="w-75"
                        src="https://concepto.de/wp-content/uploads/2015/03/grupo-1-e1550235718694.jpg"
                        alt=""
                    />
                </article>
                <article className="col-4 d-flex flex-column ">
                    <div>Grupo</div>
                    <div>Genero</div>
                    <div>Precio</div>
                    <div>Ciudad</div>
                </article>
            </section>
        </div>
    )
}
