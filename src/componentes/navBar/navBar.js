import React from "react";
import "./navBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../img/sakura-logo.png";
import { Link } from "react-router-dom";

function NavBar({ children }) {
  return (
    <header>
      <Navbar bg="light" expand="lg" className="navbar-container">
        <Container>
          <div>
            <Link to="/" className="logo-letters">
              <Navbar.Brand>
                <img
                  src={logo}
                  width="80"
                  height="80"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Brand className="logo-letters">
                Sakura Manga Store
              </Navbar.Brand>
            </Link>
          </div>
          <div className="menu">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              <Nav className="me-auto nav-typography categories-content">
                <Link to="/" className="link-typography">
                  Home
                </Link>

                <Link to="/mangas/:type" className="link-typography">
                  Mangas
                </Link>

                <NavDropdown
                  title={<span className="link-typography collection-align">Colecciones</span>}
                  id="basic-nav-dropdown"
                >
                  <Link to="/populares/:popular" className="link-typography">
                    Populares
                  </Link>
                  <Link to="/newDiscoveries/:year" className="link-typography">
                    Lanzamientos
                  </Link>
                  <Link to="/novels/:type" className="link-typography">
                    Novelas
                  </Link>
                </NavDropdown>

              </Nav>
            </Navbar.Collapse>
          </div>
          <div>{children}</div>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;
