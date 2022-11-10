import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
  <div className="container">
    <nav className="nav-main">
        <h2 className="text-white">CharlaGeek</h2>
      <ul className="nav-menu">
        <li>
          <Link to="/">Inicio</Link>
        </li>
      </ul>
      <ul className="nav-menu-right">
        <li>
         <CartWidget/>
        </li>
      </ul>
    </nav>
    </div>
  )
  
}


export default Navbar