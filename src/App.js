import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount";


function App() {
  
  return (    
      <div className='App'>
        <NavBar/>
        <ItemListContainer/>
        <ItemCount stock={5} initial={0} />
      </div>
  );
}

export default App
