import React from 'react';
import './navBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../img/sakura-logo.png';



function NavBar({ children }) {
    return (
        <header>
            <Navbar bg="light" expand="lg" className='navbar-container'>
                <Container>
                    <div>
                        <Navbar.Brand href="#home">
                            <img
                                src={logo}
                                width="80"
                                height="80"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Brand href="#home" className='logo-letters'>Sakura Manga Store</Navbar.Brand>
                    </div>
                    <div className='menu'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Mangas</Nav.Link>
                                <NavDropdown title="Colecciones" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Populares</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Nuevos Descubrimientos</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Novelas</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    <div>
                        {children}
                    </div>
                </Container>
            </Navbar>
        </header>

    );
}

export default NavBar;