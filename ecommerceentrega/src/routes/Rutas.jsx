import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../componentes/Cart/Cart";
import Inicio from "../componentes/Inicio/Inicio";
import Navbar from "../componentes/Navbar/Navbar";
const Rutas = () => {
    return (
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path="/" element={<Inicio />}/>
              <Route path="/category/:categoryId" element={<Inicio />} />
              <Route path="/cart" element={<Cart />} />
          </Routes>
      </BrowserRouter>
    );
};

export default Rutas;
