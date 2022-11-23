import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalStateContext'
import {Link} from 'react-router-dom'

const Cart = () => {
    const {carrito, eliminarProducto, vaciarCart, total } = useContext(GlobalContext) //el nombre del context a consumir, el proveedor
    console.log(carrito)
  return (
    <>
     {carrito.length > 0 ? carrito.map((prod, index) => {

return (
  
  <section className="mt-5 d-md-flex align-items-center" key={index}>
    <div className="container ">
    <div className="row ">
      <img src={prod.img} alt="Imagen del producto" className="img-fluid mx-2" style={{ width: '30%' }} />
    <h2 className="text-white">Pedido: {prod.nombre}</h2>
    </div>
    
    </div>
    <div className="contenedor-compra">
    <h5 className="text-dark">Resumen del pedido:</h5>
    <p className="text-white">Cantidad: {prod.cantidad}</p>
    <p className="text-white">Subtotal: {prod.precio}$</p>
    <p className="text-white">Total a pagar: {total}$</p>

    <button onClick={() => eliminarProducto(prod.id)} className="btn btn-warning text-dark">Eliminar</button>
 
    </div>
  </section>
)
}) :
<h4 className="text-center mt-3 text-white">Tu carrito está vacío</h4> 
}
{carrito.length > 0 ? (
                <div className="text-center">
               <button onClick={() =>vaciarCart()} className="btn btn-danger">Vaciar carrito</button>
               </div>
                ) : (
                  <div className="text-center">
                  <Link className="btn btn-primary mt-2" to="/"><i className="mx-1 bi bi-arrow-left"></i>Volver</Link>
                  </div>
                )}
    </>
  )

}

export default Cart