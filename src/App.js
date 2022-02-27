import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import ItemCount from "../src/components/ItemCount/ItemCount";
import  { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import  Item, { ItemList }  from './components/ItemList/ItemList';
//import Rutas from '../src/components/routes/index';
import  { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Home } from "../src/components/Home/Home";
import { NavBar } from '../src/components/NavBar/NavBar';
import { Cart } from "../src/components/Cart/Cart";
import { Footer } from "../src/components/Footer/Footer";
 

function App() {
  {/*const onAdd = (number) => {
    alert(`Se agregaron al carrito ${number} items`);
  };*/}
  return (  
    <div className='App'>
    
    <BrowserRouter>
      
      <NavBar/> 
        
        <Routes>  

            <Route path='/' element={<Home />}/>                                
            <Route path="/items/:id" element={<ItemDetailContainer/>}/>            
            <Route path="/category/drums/:id" element={<ItemDetailContainer />}/> 
            <Route path="/category/accesorios/:id" element={<ItemDetailContainer />}/> 

            <Route exact path="/cart" element={<Cart />}/> 
          
        </Routes>

      <Footer />   
    </BrowserRouter>
    </div>
     
  );
}

export default App
