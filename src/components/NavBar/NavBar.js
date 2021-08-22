import React from 'react'
import "./NavBar.css";
import { Link } from "react-router-dom";
//Bootstrap
import { Navbar, Nav, NavDropdown, Button, FormControl, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navBarContainer'>
      <Navbar.Brand to="/" className='mx-5'>Bicicleteria LAM</Navbar.Brand>
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
            className='mx-3'
            as={Link}
            to="/About">About
          </Nav.Link>
          <Nav.Link
            className='mx-3'
            as={Link}
            to="/Contact">Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <Menu>
    //   <Menu.Item
    //     as={Link}
    //     to="/"
    //     className="Navbar">Home</Menu.Item>
    //   <Dropdown text='Productos' pointing className='link item'>
    //     <Dropdown.Menu>
    //       <Dropdown.Header>Categorias</Dropdown.Header>
    //       <Dropdown.Item>MTB</Dropdown.Item>
    //       <Dropdown.Item>Electricas</Dropdown.Item>
    //       <Dropdown.Item>De Paseo</Dropdown.Item>
    //     </Dropdown.Menu>
    //   </Dropdown>
    //   <Menu.Item
    //     as={Link}
    //     to="/About">About</Menu.Item>
    //   <Menu.Item
    //     as={Link}
    //     to="/Contact">Contact</Menu.Item>
    // </Menu>
  )
}
export default NavBar;