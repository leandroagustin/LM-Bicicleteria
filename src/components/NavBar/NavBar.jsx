import React from "react";
import { Link } from "react-router-dom";
//Style
import "./NavBar.css";
//Bootstrap
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="container-fluid"
      bg="dark"
      variant="dark"
      className="navBarContainer fixed-top navbar-expand-lg"
    >
      <Navbar.Brand as={Link} to="/" className="brand mb-1">
        TopMega
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" className="navbarScroll" />
      <Navbar.Collapse className="collapse" id="navbarScroll">
        <Nav className="navBar" navbarScroll>
          <NavDropdown
            title="Productos"
            id="navbarScrollingDropdown"
            className="mx-3 mt-2"
          >
            <NavDropdown.Item to="#" as={Link} disabled className="navDropdown">
              Categorías
            </NavDropdown.Item>
            <NavDropdown.Item
              to="/Category/Electrica"
              as={Link}
              className="navDropdown"
            >
              Eléctricas
            </NavDropdown.Item>
            <NavDropdown.Item
              to="/Category/MTB"
              as={Link}
              className="navDropdown"
            >
              MTB
            </NavDropdown.Item>
            <NavDropdown.Item
              to="/Category/Paseo"
              as={Link}
              className="navDropdown"
            >
              Paseo
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/About" className="mx-3 mt-2">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/Contact" className="mx-3 mt-2">
            Contact
          </Nav.Link>

          <Link
            to="/cart"
            className="cart-icon-md-sm text-decoration-none px-3"
          >
            <CartWidget />
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
