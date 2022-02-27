import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import ItemCount from "../src/components/ItemCount/ItemCount";
import  { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import  Item, { ItemList }  from './components/ItemList/ItemList';
//import Rutas from '../src/components/routes/index';
import  { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from '../src/components/NavBar/NavBar';
import { Cart } from "../src/components/Cart/Cart";
 

function App() {
  {/*const onAdd = (number) => {
    alert(`Se agregaron al carrito ${number} items`);
  };*/}
  return (  
    <div className='App'>
    
    <BrowserRouter>
      <NavBar/> 
      {/*<ItemListContainer opening="¡Bienvenidos al Drum Shop más grande de Argentina!"/> 
      <ItemCount stock={5} initial={0} onAdd={onAdd}/>*/}


      <Routes>  

        <Route path='/' element={<ItemListContainer/>}/>                                
        <Route path="/items/:id" element={<ItemDetailContainer/>}/>            
        <Route path="/category/drums/:id" element={<ItemDetailContainer />}/> 
        <Route path="/category/accesorios/:id" element={<ItemDetailContainer />}/> 

        <Route exact path="/cart" element={<Cart />}/> 
        
      </Routes> 
      <footer>
        Sitio desarrollado por DWT.
      </footer>    
    </BrowserRouter>
    </div>
     
  );
}

export default App
