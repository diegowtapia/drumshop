import React,{useContext, useEffect, useState} from "react";
import { Card, Button } from "react-bootstrap";
import Items from "./Item";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "../Cart/Cart.css";
import { Item } from '../ItemList/Item';

export const ItemList = ({ productos }) => {


  return (
      <>
         
          {productos.map((producto) => (<Item {...producto} key={producto.id}/>) )}
         
      </>
  
  )
}

