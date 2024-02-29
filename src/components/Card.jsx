import React from 'react';

function Card({ titulo, autor }) {
    const cardStyle = {
        backgroundColor: 'yellow', 
        border: '6px solid white', 
        padding: '10px', 
        margin: '10px 0',
      };
  return (
    <div className="card" style={cardStyle}>
        <h2>Última canción que agregaste</h2>
        <h3>Título: {titulo}</h3>
        <p>Grupo o Cantante: {autor}</p>
    </div>
  );
}

export default Card;