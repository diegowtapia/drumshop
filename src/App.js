import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import  { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import  Item, { ItemList }  from './components/ItemList/ItemList';
import  { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import  NavBar   from '../src/components/NavBar/NavBar';
import  Cart  from './components/Cart/Cart';
import { UseCartContext }    from "../src/context/CartContext";
import  { Footer }  from "../src/components/Footer/Footer";
import  FirebaseContext  from './context/FirebaseContext';
import { CartContainer } from './context/FirebaseContext'; 
import { Inicio } from '../src/components/pages/Inicio';
import { CartProvider } from "../src/context/CartContext";
import  FormCompra  from './components/Form/FormCompra';
import { CartContextProvider } from '../src/context/CartContext';


function App() {
  
  return (  
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/items/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />  
            <Route path="/checkout" element={<FormCompra />} />                   
          </Routes>
          <Footer />
        </BrowserRouter>
        </CartContextProvider>
    </>
    

  );
}

export default App
   