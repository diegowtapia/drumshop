import React, { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";


const cartContext = createContext();
export const useCartContext = () => useContext(cartContext);

function CartContext({ children }) {
   let cartLocalStorage = JSON.parse(localStorage.getItem("carritoReact"));

    const [carrito, setCarrito] = useState(
        cartLocalStorage ? cartLocalStorage : []
    );

    //guarda el carrito en el LocalStorage
    localStorage.setItem("carritoReact", JSON.stringify(carrito));


    // agrega un producto al carrito
    function addToCart(producto, cantidad) {        
        if (carrito.some((p) => p.id === producto.id)) {
            let newCart = [...carrito];
            let repetido = newCart.find((p) => p.id === producto.id);

            repetido.cant += cantidad;
            
            setCarrito(newCart);
        } else {
            setCarrito([...carrito, producto]);
        }
    }

    //suma la cantidad total de productos en el carrito
    function productosEnCarrito() {
        let total = 0;

        carrito.forEach((p) => (total += p.cant))

        return total;
    }

    //suma el precio total de los productos en el carrito
    function precioTotal() {
        let total = 0;
        
        carrito.forEach((p) => (total += p.price * p.cant));
        
        return total;
    }

    //vacia el carrito
    function vaciarCarrito() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-outline-success ms-2",
                cancelButton: "btn btn-outline-danger me-2", 
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
      .fire({
        title: "¿Seguro que desea vaciar todo el carrito?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, vaciar",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Carrito vaciado exitosamente!",
            "",
            "success"
          );
          setCarrito([]);
        }
      });
    }

    //borra el producto del carrito
    function borrarProducto(id) {
        let newCart = carrito.filter((p) => p.id !== id);

        setCarrito(newCart);
    }

    return(
        
        <cartContext.Provider
            value={{
                carrito,
                setCarrito,
                addToCart,
                productosEnCarrito,
                precioTotal,
                vaciarCarrito,
                borrarProducto,
            }}
        >
                {children}
        </cartContext.Provider>
        
    );
}

export default CartContext;