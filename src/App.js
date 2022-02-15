import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount";


function App() {
  const onAdd = (number) => {
    console.log(`Se agregaron al carrito ${number} items`);
  };  
  return (    
      <div className='App'>
        <NavBar/>
        <ItemListContainer opening="¡Bienvenidos al Drum Shop más grande de Argentina!"/>
        <ItemCount stock={5} initial={0} onAdd={onAdd}/>
      </div>
  );
}

export default App
