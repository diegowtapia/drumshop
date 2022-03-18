import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import  { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import  Item, { ItemList }  from './components/ItemList/ItemList';
//import Rutas from '../src/components/routes/index';
import  { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

import  NavBar   from '../src/components/NavBar/NavBar';
import { Cart } from './components/Cart/Cart';
import { UseCartContext }    from "../src/context/CartContext";
import  { Footer }  from "../src/components/Footer/Footer";
import  FirebaseContext  from './context/FirebaseContext';
import { CartContainer } from './context/FirebaseContext'; 
import Pages from "../src/components/pages/Pages";
import { Inicio } from '../src/components/pages/Inicio';
import { CartProvider } from "../src/context/CartContext";

function App() {
  
  return (  
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/items/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />            
          </Routes>
        </BrowserRouter>
        </CartProvider>
    </>
    

  );
}

export default App
    {/* 
      <UseCartContext>
      <FirebaseContext>
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
      </FirebaseContext>
      </UseCartContext>
    </>
     
  );
}
*/}

