import React from 'react'
import "./NavBar.css";
import { Link } from "react-router-dom";
//Semantic UI
import { Button, Icon } from 'semantic-ui-react'
//Bootstrap
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navBarContainer'>
      <Navbar.Brand as={Link} to="/" className='brand mx-5'>TopMega</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="navBar"
          style={{ maxHeight: '100px', fontSize: '20px'}}
          navbarScroll
        >
          <NavDropdown title="Productos" id="navbarScrollingDropdown" className='mx-3'>
            <NavDropdown.Item to="#" as={Link} disabled className='navDropdown'>Categorias</NavDropdown.Item>
            <NavDropdown.Item to="/Category/electronics" as={Link} className='navDropdown'>electronics</NavDropdown.Item>
            <NavDropdown.Item to="/Category/jewelery" as={Link} className='navDropdown'>jewelery</NavDropdown.Item>
            <NavDropdown.Item to="/Category/men's clothing" as={Link} className='navDropdown'>men's clothing</NavDropdown.Item>
            <NavDropdown.Item to="/Category/women's clothing" as={Link} className='navDropdown'>women's clothing</NavDropdown.Item>
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
          <Button animated='vertical'>
            <Button.Content hidden>Carro</Button.Content>
            <Button.Content visible>
              <Icon name='shop' />
            </Button.Content>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default NavBar;