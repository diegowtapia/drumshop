import { doc, getDoc } from 'firebase/firestore';
import { db } from "../../services/getFirebase";
import { useParams } from "react-router-dom";
import { ItemDetail } from '../ItemDetailContainer/ItemDetail';
import { useEffect, useState } from "react";
import { Breadcrumb, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";


export const ItemDetailContainer = () => {
  
  const [selectedItem, setSelectedItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  
  const { id } = useParams();

  const getSelected = async () => {
      try {
        const document = doc(db, "items", id);
        const response = await getDoc(document);
        const result =  { id: response.id, ...response.data() }
        setSelectedItem(result);
        setIsLoading(false);
      } catch (error) {
        console.log("Error", error);
      }
  }

  useEffect(() => {
    getSelected()

  }, [id])
  
    
  return (
    <>
      {isLoading ? (
        <section className="container text-center">
            <Spinner animation="border" variant="warning" />
            <h1 className="text-center mt-2">Cargando....</h1>             
        </section>
      ) : (
        <>
            <Breadcrumb>
                <Link className="breadcrumb-item" to="/" style={{ color: "black" }}>
                    Home
                </Link>                
                    
            </Breadcrumb>
            <div className="container mt-5">
              <div className="row justify-content-center mt-5">
                  
                  <ItemDetail productos={selectedItem} />
              
              </div>
      
            </div>
          
        </>
      )}
    </>
  );
};



