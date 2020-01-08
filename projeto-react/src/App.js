import React from 'react';
import logo from './logo.svg';
import './App.css';

import Titulo from './componentes/Titulo';

function App() {
  return (
    <div className="App">
      <Titulo cor= "azul" >
        MEU PRIMEIRO COMPONENTE tem a cor 
      </Titulo>
    </div>
  );
}


export default App;
