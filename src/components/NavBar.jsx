
//import { CartWidget } from './CartWidget'

import { Nav, Navbar, Container } from "react-bootstrap";

export function NavBar() {
    return (
        <>
            <header>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#home">Nuevos Lanzamientos</Nav.Link>
                                <Nav.Link href="#home">A~Z</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}