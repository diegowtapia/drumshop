import React from 'react';
import './App.css';
import ItemCount from "../src/components/ItemCount/ItemCount";
//import Rutas from '../src/components/routes/index';
import ItemListContainer from "../src/components/ItemListContainer/ItemList";
import NavBar from './components/NavBar/NavBar';

function App() {
  const onAdd = (number) => {
    alert(`Se agregaron al carrito ${number} items`);
  };  
  return (    
    <React.Fragment>
      <div className='App'>

          <NavBar/>         
          <ItemListContainer opening="¡Bienvenidos al Drum Shop más grande de Argentina!"/>         
          <ItemCount stock={5} initial={0} onAdd={onAdd}/>
      </div>
    </React.Fragment>         
      
  );
}

export default App
