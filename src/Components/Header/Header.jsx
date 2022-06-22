import React from 'react';

export default function Header({ img }) {
  return (
    <header>
      <div
        className="Hero"
        style={{
          height: '350px',
          width: '100vw',
          background: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </header>
  );
}
