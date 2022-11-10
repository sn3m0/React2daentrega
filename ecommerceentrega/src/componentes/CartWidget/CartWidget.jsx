import carro from '../../img/carrito-de-compras.png';
import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalStateContext'
import { Link } from 'react-router-dom';

export const CartWidget = () => {
  const {carrito} = useContext(GlobalContext)

  return (
    <>
    <Link to="/cart" className="text-white fs-5">{carrito.length}<img className="img-fluid imagen" src={carro} alt="Cantidad de productos del carro" /></Link>
    </>
  )
}
