import './Cart.css'
import { useContext } from "react";
import { CartContext } from '../Context/CartContext'
import { EmptyCart } from './EmptyCart'
import { IconTrash } from '../Icon/Icon';
import { Link } from "react-router-dom";

export function Cart() {
    const { cartList, ammountInCart, removeList, totalPrice, deleteItem } = useContext(CartContext)

    const handleClear = () => {
        removeList()
    }

    return (
        ammountInCart() === 0
            ? <EmptyCart />
            : <>
                <section className='cart-container'>
                    <h2 className='text-color'>My Cart</h2>
                    <div className='text-color detail'>
                        <p>Name</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                    </div>
                    {cartList.map(item =>
                    (
                        <div key={item.id} className='text-color detail border-on'>
                            <p>{item.name+' .v'+item.volumen}</p>
                            <p>${item.price}</p>
                            <p>{item.count}</p>
                            <p>${item.price * item.count}</p>
                            <button className='bt-cart-trash' onClick={() => { deleteItem(item) }}><IconTrash /></button>
                        </div>

                    ))}
                    <div className='action-container'>
                        <button className='bt-cart' onClick={handleClear}>Clear Cart <IconTrash /></button>
                        <h3 className='text-color'>Total Price: $ {totalPrice()}</h3>  
                        <Link to='/buyout' className='bt-cart link-no-style'> Continue with the buy...</Link>
                    </div>
                </section>

            </>
    )
}