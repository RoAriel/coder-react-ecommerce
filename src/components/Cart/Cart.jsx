import './Cart.css'
import { useContext } from "react";
import { CartContext } from '../Context/CartContext'
import { EmptyCart } from './EmptyCart'
import { IconTrash } from '../Icon/Icon';

export function Cart() {
    const { cartList, ammountInCart, removeList, totalPrice, deleteItem } = useContext(CartContext)

    const handleClear = () => {
        removeList()
    }
console.log(cartList)
    return (
        ammountInCart() === 0
            ? <EmptyCart />
            : <section>
                <h2 className='text-color'>My Cart</h2>
                {cartList.map(e => (
                    <div key={e.id} className='text-color in-column-flex'>
                        <h4>{e.name}</h4>
                        <p>${e.price}</p>
                        <p>{e.count}</p>
                        <p>${e.price * e.count}</p>
                        <button onClick={() => { deleteItem(e) }}><IconTrash /></button>
                    </div>
                ))}
                <h3 className='text-color'>Total Price: $ {totalPrice()}</h3>
                <button onClick={handleClear}>Clear Cart <IconTrash /></button>
            </section>
    )
}