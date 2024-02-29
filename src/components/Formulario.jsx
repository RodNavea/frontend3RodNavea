import { useState } from 'react';
import Card from './Card';

function Formulario() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [cardData, setCardData] = useState(null); 
  const [cancionCount, setCancionCount] = useState(0); 
  const [cancionList, setCancionList] = useState([]); 

  const handleSubmit = (err) => {
    err.preventDefault();
    if (cancionList.some(cancion => cancion.titulo === titulo && cancion.autor === autor)) {
      setErrorMessage("Ya escuchaste esta canción. Puedes escuchar otra!");
      return;
    }
    if (titulo.trim().length < 3 || titulo.trim().startsWith(' ') || autor.trim().length < 6) {
      setErrorMessage("Por favor chequea que la información sea correcta");
      setShowCard(false); 
    } else {
      setShowCard(true);
      setCardData({ titulo, autor }); 
      setCancionList([...cancionList, { titulo, autor }]); 
      setCancionCount(cancionCount + 1);
      setErrorMessage('');
    }
  };

  const handleInputChange = (err) => {
    if (err.target.id === 'titulo') {
      setTitulo(err.target.value);
    } else if (err.target.id === 'autor') {
      setAutor(err.target.value);
    }
  };

  return (
    <div>
      <h2>Formulario de Canciones</h2>
      <p>Canciones Escuchadas: {cancionCount}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titulo">Nombre de la canción:</label><br />
          <input 
            type="text" 
            id="titulo" 
            value={titulo} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="autor">Grupo o Cantante:</label><br />
          <input 
            type="text" 
            id="autor" 
            value={autor} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {showCard && <Card titulo={cardData.titulo} autor={cardData.autor} />} 
    </div>
  );
}

export default Formulario;