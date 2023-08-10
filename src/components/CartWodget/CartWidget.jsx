import { CartIcon } from '../Icon/Icon';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export function CartWidget() {
    return (

        <Button className='d-flex justify-content-center' variant="secondary">
            <CartIcon/>
            <Badge bg="primary" className=' ms-2'>10</Badge>
        </Button>

    )
}