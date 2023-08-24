import './CartWidget.css'
import { CartIcon } from '../Icon/Icon';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

export function CartWidget() {
    const {ammountInCart} = useContext(CartContext)

    return (
        <button className='circle'>
            <CartIcon/>
            <span>{ammountInCart()}</span>
        </button>

    )
}