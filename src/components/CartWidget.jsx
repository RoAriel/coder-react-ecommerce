import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export function CartWidget() {
    return (

        <Button className='d-flex justify-content-center' variant="secondary">
            <img src="src/assets/img/carrito.svg" alt="carrito" />
            <Badge bg="primary" className=' ms-2'>10</Badge>
        </Button>

    )
}