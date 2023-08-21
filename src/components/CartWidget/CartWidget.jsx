import './CartWidget.css'
import { CartIcon } from '../Icon/Icon';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
export function CartWidget() {
    const cartContext = useContext(CartContext)

    console.log({cartContext})

    return (

        <button className='circle'>
            <CartIcon/>
            <span>10</span>
        </button>

    )
}