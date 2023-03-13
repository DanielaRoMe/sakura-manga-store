import React from "react";
import { createContext, useState } from "react";

// //SweetAlert
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // const [qty, setQuantity] = useState({});

  const addCart = (newBook) => {
    if (cart.some((item) => item.id === newBook.id)) {
      Swal.fire({
        title: "Item ya se encuentra en el carrito",
        icon: "info",
        html: "Pulse el botón de carrito en la esquina superior derecha para ver más detalles :)",
        showCloseButton: true,
        showCancelButton: true,
      });
    } else {
      const newItem = { ...newBook, quantity: 1 };
      setCart([...cart, newItem]);
      Swal.fire({
        title: newBook.title,
        text: "Has agregado este elemento a tu carrito",
        imageUrl: newBook.img,
        imageWidth: 200,
        imageHeight: 350,
        imageAlt: newBook.title,
      });
    }
  };

  const cartCounter = cart.length;

  const incrementQty = (id) => {
    setCart((prevCart) => {
      const updateCart = prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      return updateCart;
    });
  };

  const decrementQty = (id) => {
    setCart((prevCart) => {
      const updateCart = prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      return updateCart;
    });
  };

  const removeItemFromCart = (product) => {
    const itemIndex = cart.findIndex((item) => item.id === product.id);

    const updatedCart = [...cart];
    updatedCart.splice(itemIndex, 1);
    setCart(updatedCart);
  };

 
  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        cartCounter,
        incrementQty,
        decrementQty,
        removeItemFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
