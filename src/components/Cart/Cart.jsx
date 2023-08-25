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
                {cartList.map(item =>
                (
                    <div key={item.id} className='text-color in-column-flex'>
                        <h4>{item.name}</h4>
                        <p>${item.price}</p>
                        <p>{item.count}</p>
                        <p>${item.price * item.count}</p>
                        <button onClick={() => { deleteItem(item) }}><IconTrash /></button>
                    </div>
                ))}
                <h3 className='text-color'>Total Price: $ {totalPrice()}</h3>
                <button onClick={handleClear}>Clear Cart <IconTrash /></button>
            </section>
    )
}