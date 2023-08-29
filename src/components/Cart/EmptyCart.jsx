import { IconCartEmpty } from '../Icon/Icon'
import { Link } from "react-router-dom";

export function EmptyCart() {
    return (
        <section className='cart-empty'>
            <picture className='item1' >
                <IconCartEmpty />
            </picture>
            <Link to="/" className='item2'>
                <button className='bt-cart'> Go to home and buy!</button>
            </Link>
        </section>
    )
}