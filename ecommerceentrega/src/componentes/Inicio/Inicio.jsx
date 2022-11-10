import '../../scss/app.scss'
import Productos from '../Productos/Productos'
import React, { useContext } from 'react'
import { GlobalContext } from "../../Context/GlobalStateContext"

const Inicio = () => {

  return (
    <>
    <h1 className="text-center text-white mt-5">CharlaGeek Store!</h1>
    <Productos/>
    </>
  )
}

export default Inicio