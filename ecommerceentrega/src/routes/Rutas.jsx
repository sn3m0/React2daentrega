import React from 'react'
import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Cart from '../componentes/Cart/Cart'
import Inicio from '../componentes/Inicio/Inicio'
import Layout from '../componentes/Layout/Layout'
const Rutas = () => {
  return (
    <>
        <BrowserRouter>
        <Routes>

        <Route path="/" element={<Layout/>}>
        <Route index element={<Inicio/>}/>
        <Route path="/cart"  element={<Cart/>} />


        </Route>

        </Routes>
        
        </BrowserRouter>
    </>
  )
}

export default Rutas