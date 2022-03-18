import React, { useEffect, useState, useContext } from "react";

import  { useFirebaseContext }  from '../../context/FirebaseContext';

import { ItemList } from "../ItemList/ItemList";

import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../services/getFirebase';


export const ItemListContainer = () => {
    const[items, setItems] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    
  let {category} = useParams();
     
    const getData = async () => {
      try {
        const itemsCollection = collection(db, "items")
        const col = await getDocs(itemsCollection)
        const result = col.docs.map((doc)=> doc = {id:doc.id, ...doc.data()})
        setItems(result)
        setIsLoading(false)
      } catch(error) {
        console.log('Error', error);
      }
  }
  
  const getDataCategory = async () => {
    try {
      const itemsCollection = collection(db, "items")
      const col = await getDocs(itemsCollection)
      const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
      setItems(result.filter(e => e.category === category))
      setIsLoading(false)
    } catch (error) {
      console.log('Error', error)
    }
  }

  useEffect(() => {
    category?getDataCategory():getData()

  },[category])
  
  console.log('items', items)

    return (
      <>
        {isLoading ? (
          <h1 className="text-center mt-2">Cargando....</h1>
        ) : (
          <>
           
            <div className="container mt-5 bg-light pt-5 pb-5 shadow-sm">
              <div className="row">
                <ItemList productos={items} />
              </div>
            </div>
          </>
        )}
      </>
    );
  
};



{/* 
export const ItemListContainer = () => {

    
    const { idCategoria } = useParams();
    const [items, setItems] = useState([]);
    const [load, setLoad] = useState(true);
    
    //const [productos, setProductos] = useState([])

    const getData = async() => {
        try{
            const itemsCollection = collection(db, "items")
            const col = await getDocs(itemsCollection)
            const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
            setItems(result)
            setLoad(false)
        } catch (error) {
            console.warn("error",error)
        }
    }

    useEffect(() => {
      getData()

    
    }, [idCategoria])   


    
    console.log("itemssss" , items)
    return (
        <>
          {items && items.length > 0 ? (
            <section className="container">
              <Row>
                
                  <Col
                    key={items.idCategoria}
                    xs={6}
                    md={3}
                    className="d-flex justify-content-center"
                  >
                    <ItemList
                      img={items.img}
                    />
                  </Col>
                
              </Row>
            </section>
            ) : (
                <section className="d-flex justify-content-center mt-3">
                    <Spinner animation="border" variant="warning" />
                </section>
            )}
        </>
    )

*/}
/*
    //setea el id del state de firebase
    useEffect(() => {
        setIdParam(null);
    }, [setIdParam, idCategoria]);

    
    useEffect(()=>{
        setProductos(baseDeDatos);
    },[]) 

    return (
        <>
            <section>
                <Row>
                {                
                    productos.map (producto=>{                    
                        return(
                            <Col
                                key={producto.id}
                                xs={6}
                                md={3}
                                className="d-flex justify-content-center"
                            >
                                <ItemList 
                                    key={producto.id}
                                    id={producto.id}            
                                    productoProp={producto}
                                    precio={producto.precio}
                                    img={producto.img}
                                />
                            </Col>
                        )
                        
                    })}
                
                </Row>
            </section>
        </>
    )
} 
*/
/*
//export default function ItemListContainer(){
const ItemListContainer = ({opening}) => { 
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const prodPromise = new Promise((resolve,reject)=>{
            setTimeout(() => {
                setProductos(baseDeDatos);
                setLoading(false);                
                resolve(true);                
            }, 2000);             
        })
            prodPromise.then(()=>{console.log("Carga Completada")})
            prodPromise.catch(()=>{console.log("ERROR 404")})
    }, []);    
    

        return(
            <>
                {loading ? (
                    <h1>Cargando Productos Increibles!!...</h1>
                    
                ) : (
                    <>
                        <h1>{opening}</h1>
                        <Item productos={productos}/>
                    </>
                )}
            </>
        )
}
export default ItemListContainer;
*/
