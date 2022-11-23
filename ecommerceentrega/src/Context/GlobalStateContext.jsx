import React, { createContext, useEffect, useState } from "react";
import { data } from "../config/data";
// import swal from '@sweetalert/with-react'
export const GlobalContext = createContext("");

const GlobalStateContext = ({ children }) => {
  const carritoLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carrito")) ?? []
      : null;

  const [carrito, setCarrito] = useState(carritoLS);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);
  const productos = data;

  function añadirProducto(id) {
    if (carrito.some((juego) => juego.id === id)) {
      alert("Error, producto repetido")
      /* swal({
        title: "Error!",
        text: "Ese producto ya está agregado, elegí otro por favor",
        icon: "warning",
    }) */
    } else {
      const item = data.find((prod) => prod.id === id);
      setCarrito([...carrito, item]);
      carrito.push(item);
    }
  }

  const eliminarProducto = (id) => {
    const prodEliminar = carrito.filter((curso) => curso.id !== id);
    setCarrito(prodEliminar);
  };

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
    setTotal(calculoTotal);
  }, [carrito]);

  const vaciarCart = () => {
    setCarrito([]);
  };
  return (
    <GlobalContext.Provider
      value={{
        total,
        vaciarCart,
        productos,
        añadirProducto,
        carrito,
        eliminarProducto,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStateContext;
