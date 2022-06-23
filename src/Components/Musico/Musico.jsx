import React from 'react';
import './Musico.scss';

import Header from '../Header/Header';

export default function Musico({musician}) {
  console.log(musician)
  return (
    <div className="wrap">
      <Header img={musician.imagenMusico} />
      <section className="Music">
        <div className="profile">
          <img
            src={musician.imagenMusico}
            alt="music"
          />
          <h1>Musico</h1>
        </div>
        <div className="detail">
          <h2>Detalles</h2>
          <h3>
            Genero : <span>{musician.genero}</span>
          </h3>
          <h3>
            Representante : <span>Alvaro </span>
          </h3>
          <h3>
            Zona de Cobertura: <span>CDMX</span>
          </h3>
        </div>
      </section>
    </div>
  );
}
