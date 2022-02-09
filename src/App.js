import React from 'react';
import './App.css';
import Mensaje from './components/ItemListContainer';
import NavBar from "./components/NavBar";


function App() {
  return (    
      <div className='App'>
        <NavBar />
        <Mensaje />
      </div>
  );
}

export default App
