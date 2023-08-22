import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount'
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

export function ItemDetail({ item }) {

    const cartContext = useContext(CartContext)

    const [count, setCount] = useState(1)
    const [buy, setBuy] = useState({})
   

    const handleLess = () => {
        count > 1 && setCount(count - 1)
    }

    const handlePlus = () => {
        count < item.stock && setCount(count + 1)

    }

    const handleOnAdd = () => {
        setBuy({ ...item, count })
        cartContext.addToCart(buy)
        cartContext.incrementCartQuantity()
    }

    
    const formatPrice = new Intl.NumberFormat().format(parseFloat(item.rice))
    return (
        <article className='item-detail'>
            <div className='id-img'>
                <img src={item.urlImage} alt="front manga" />
            </div>
            <div className='itm-d-detail'>
                <div className='itm-d-content'>
                    <h2 className='itm-d-title'>
                        {item.name + ' v.' + item.volumen}
                    </h2>
                    <p className='itm-d-price'>${formatPrice}</p>
                    <p className='itm-d-descriptiom'>{item.plot}</p>
                    <ItemCount count={count} handleLess={handleLess} handlePlus={handlePlus} handleOnAdd={handleOnAdd} />
                </div>
            </div>
        </article>

    )
}