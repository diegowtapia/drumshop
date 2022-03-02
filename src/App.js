import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import  { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import  Item, { ItemList }  from './components/ItemList/ItemList';
//import Rutas from '../src/components/routes/index';
import  { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import  Home   from "../src/components/Home/Home";
import  NavBar   from '../src/components/NavBar/NavBar';
import  Cart    from "../src/components/Cart/Cart";
import  CartContext   from "../src/context/CartContext";
import  { Footer }  from "../src/components/Footer/Footer";
 

function App() {
  
  return (  
    
    <CartContext>
      <BrowserRouter>      
        <NavBar/> 
          
          <Routes>  

              <Route exact path='/' element={<Home/>}/>                                
              <Route exact path="/items/:id" element={<ItemDetailContainer/>}/>            
              <Route exact path="/category/drums/:id" element={<ItemDetailContainer/>}/> 
              <Route exact path="/category/accesorios/:id" element={<ItemDetailContainer/>}/>
              <Route exact path="/cart" element={<Cart/>}/> 
            
          </Routes>

        <Footer />   
      </BrowserRouter>
    </CartContext>
    
     
  );
}

export default App
