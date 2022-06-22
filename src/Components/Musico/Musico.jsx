import React from 'react';
import './Musico.scss';

import Header from '../Header/Header';

export default function Musico() {
  return (
    <div className="wrap">
      <Header img="https://i.postimg.cc/RhKcnmVB/young-african-american-jazz-musician-singing-song-on-gradient-pink-2.png" />
      <section className="Music">
        <div className="profile">
          <img
            src="https://i.postimg.cc/vZg9Djbh/band-g772da0cbe-640-3.png"
            alt="music"
          />
          <h1>Musico</h1>
        </div>
        <div className="detail">
          <h2>Detalles</h2>
          <h3>
            Genero : <span>Cumbia</span>
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
