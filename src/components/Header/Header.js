import React from "react";
import "./Header.css";
import { Icon } from 'semantic-ui-react'

const Header = (props) => {
  return (
    <div className="Header">
      <h1>{props.title}</h1>
      <nav className="NavBar">
        <li>
          <a href="../../public/index.html">Inicio</a>
        </li>
        <li className="listas">
          <a>Productos</a>
        </li>
        <li className="listas">
          <a>Sobre Nosotros</a>
        </li>
        <li className="listas">
          <a>Taller</a>
        </li>
        <li className="listas">
          <a>Contacto</a>
        </li>
        <Icon name='cart' size='large' circular inverted color='orange' />
      </nav>
    </div>
  );
};
export default Header;
