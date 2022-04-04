import {collection, getDocs } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import  {db}  from "../services/getFirebase";

const firebaseContext = createContext();
export const useFirebaseContext = () => useContext(firebaseContext);

function FirebaseContext({ children }) {
  const [productos, setProductos] = useState([]);
  const [categoriaParam, setCategoriaParam] = useState(null);
  const [idParam, setIdParam] = useState(null);
  const [stockItem, setStockItem] = useState(null);
  

  useEffect(() => {
    
    setProductos(null);

    if (categoriaParam) {
      const query = collection(db, "items");
      const response = getDocs(query)
        .where("category", "==", categoriaParam)
        .get()
        .then((response) =>  
        setProductos(response.docs.map(doc => {return{id: doc.id, ...doc.data()}}))
        
        )
        .catch((err) => console.log(`Error: ${err}`));
    } else if (idParam) {
        const query = collection(db, "items");
        const response = getDocs(query)
        .doc(idParam)
        .get()
        .then((response) => {
          setProductos({ id: response.id, ...response.data() });
          setStockItem(response.data().stock);
        })
        .catch((err) => console.log(`Error: ${err}`));
    } else {
        const query = collection(db, "items");
        const response = getDocs(query)
        .get()
        .then((response) => 
            setProductos(response.docs.map(doc => {return{id: doc.id, ...doc.data()}}))
            
        )
        .catch((err) => console.log(`Error: ${err}`));
    }
  }, [categoriaParam, idParam]);

  return (
    <firebaseContext.Provider
      value={{
        productos,
        setCategoriaParam,
        setIdParam,
        stockItem,
        setStockItem,        
        
      }}
    >
      {children}
    </firebaseContext.Provider>
  );
}

export default FirebaseContext;

