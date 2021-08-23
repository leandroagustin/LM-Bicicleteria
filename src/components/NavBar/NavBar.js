import React from 'react'
import "./NavBar.css";
import { Link } from "react-router-dom";
//Bootstrap
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navBarContainer'>
      <Navbar.Brand to="/" className='mx-5'>BicleteriaLAM</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="navBar"
          style={{ maxHeight: '100px', fontSize: '20px'}}
          navbarScroll
        >
          <Nav.Link
            className='mx-3'
            as={Link}
            to="/">Home
          </Nav.Link>
          <NavDropdown title="Productos" id="navbarScrollingDropdown" className='mx-3'>
            <NavDropdown.Item to="#" disabled className='navDropdown'>Categorias</NavDropdown.Item>
            <NavDropdown.Item to="#action4" className='navDropdown'>MTB</NavDropdown.Item>
            <NavDropdown.Item to="#action5" className='navDropdown'>Electricas</NavDropdown.Item>
            <NavDropdown.Item to="#action5" className='navDropdown'>De Paseos</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            as={Link}
            to="/About"
            className='mx-3'>About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Contact"
            className='mx-3'>Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default NavBar;