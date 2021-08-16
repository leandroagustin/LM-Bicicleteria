import React from "react";
import "./Header.css";
import CartWidget from '../CartWidget/CartWidget';

const Header = (props) => {
  return (
    <div className="Header">
      <h1>{props.title}</h1>
      <nav className="NavBar">
        <li>
          <a href="../../public/index.html">Home</a>
        </li>
        <li className="listas">
          <a href="#">Productos</a>
        </li>
        <li className="listas">
          <a href="#">Sobre Nosotros</a>
        </li>
        <li className="listas">
          <a href="#">Taller</a>
        </li>
        <li className="listas">
          <a href="#">Contacto</a>
        </li>
        <CartWidget/>
      </nav>
    </div>
  );
};
export default Header;
