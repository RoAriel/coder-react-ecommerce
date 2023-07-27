
import { CartWidget } from './CartWidget'
import { Nav, Navbar, Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

export function NavBar() {
    return (
        <header>
            <Container className="bg-dark p-0" fluid>
                <Row>
                    <Col className='text-center'>
                        <Figure>
                            <Figure.Image
                                width={170}
                                height={95}
                                src="src/assets/jump-force_logo.png" alt="logo-Jump" />
                        </Figure>
                    </Col>
                    <Col className='align-self-center'>
                            <Nav>
                                <Nav.Link href="#home" className='text-white'><h4>Home</h4></Nav.Link>
                                <Nav.Link href="#home" className='text-white'><h4>Mangas</h4></Nav.Link>
                                <Nav.Link href="#home" className='text-white'><h4>Nuevos Lanzamientos</h4></Nav.Link>
                                <Nav.Link href="#home" className='text-white'><h4>A~Z</h4></Nav.Link>
                            </Nav>
                    </Col>
                    <Col className='align-self-center' >
                        <CartWidget />
                    </Col>
                </Row>
            </Container>
        </header>
    )
}