import React from 'react'
import "./NavBar.css";
import { Link } from "react-router-dom";
//Semantic UI

//Bootstrap
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import CartWidget from '../CartWidget/CartWidget';
  
const NavBar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navBarContainer'>
      <Navbar.Brand as={Link} to="/" className='brand mx-5 mb-1'>TopMega</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="navBar"
          navbarScroll
        >
          <NavDropdown title="Productos" id="navbarScrollingDropdown" className='mx-3 mt-2'>
            <NavDropdown.Item to="#" as={Link} disabled className='navDropdown'>Categorías</NavDropdown.Item>
            <NavDropdown.Item to="/Category/electronics" as={Link} className='navDropdown'>Tecnología</NavDropdown.Item>
            <NavDropdown.Item to="/Category/jewelery" as={Link} className='navDropdown'>Joyería</NavDropdown.Item>
            <NavDropdown.Item to="/Category/men's clothing" as={Link} className='navDropdown'>Ropa de Hombre</NavDropdown.Item>
            <NavDropdown.Item to="/Category/women's clothing" as={Link} className='navDropdown'>Ropa de Mujer</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            as={Link}
            to="/About"
            className='mx-3 mt-2'>About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Contact"
            className='mx-3 mt-2'>Contact
          </Nav.Link>

          <Link to="/cart" className="cart-icon-md-sm text-decoration-none">
            <CartWidget />
          </Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default NavBar;