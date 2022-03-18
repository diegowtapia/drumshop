import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow((prev) => !prev);

  const addItem = (item, quantity) => {
    if (cartItems.some((product) => product.id === item.id)) {
      const copy = [...cartItems];
      const repeatItemIndex = cartItems.findIndex(
        (product) => product.id === item.id
      );
      copy[repeatItemIndex] = {
        ...copy[repeatItemIndex],
        quantity: copy[repeatItemIndex].quantity + quantity,
      };

      setCartItems(copy);
      setCartCount((prev) => prev + quantity);
      setShow((prev) => !prev);
    } else {
      setCartItems([...cartItems, { ...item, quantity }]);
      setCartCount((prev) => prev + quantity);
      setShow((prev) => !prev);
    }
  };

  const deleteItem = (id) => {
    let res = cartItems.filter((e) => e.id !== id);
    setCartItems(res);
  };

  const clearAll = () => {
    setCartItems([]);
  };

  

  return (
    <CartContext.Provider
      value={{ cartCount, cartItems, addItem, show, handleShow, deleteItem, clearAll }}
    >
      {children}
    </CartContext.Provider>
  );
};

/*
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

export default CartContext;*/