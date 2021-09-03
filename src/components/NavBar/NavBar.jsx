import CartWidget from "./CartWidget"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

import { AiOutlineShoppingCart } from "react-icons/bs"

const NavBar=()=>{
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Susan Novalinski</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Productos</Nav.Link>
                        <NavDropdown title="Consúltanos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Agendar</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Reparaciones</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Urgencias</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Preguntas frecuentes</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                    <AiOutlineShoppingCart />
                    <CartWidget />
                </Navbar>
                
    </>
  )
}
export default NavBar