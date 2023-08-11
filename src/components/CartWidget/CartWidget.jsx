import './CartWidget.css'
import { CartIcon } from '../Icon/Icon';

export function CartWidget() {
    return (

        <button className='circle'>
            <CartIcon/>
            <span>10</span>
        </button>

    )
}