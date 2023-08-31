import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount'
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import toast, { Toaster } from 'react-hot-toast';
import { toastStyleAdd} from '../Utils/utils';

export function ItemDetail({ item }) {

    const {addToCart } = useContext(CartContext)

    const [count, setCount] = useState(1)
   

    const handleLess = () => {
        count > 1 && setCount(count - 1)
    }

    const handlePlus = () => {
        count < item.stock && setCount(count + 1)

    }

    const handleOnAdd = () => {
        addToCart(item, count)
        toast.success('Successfully added 📘!', toastStyleAdd());
    }

    
    const formatPrice = new Intl.NumberFormat().format(parseFloat(item.price))
    
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
                    <span>Collection: {item.collection}</span>
                    <p className='itm-d-price'><strong>${formatPrice}</strong></p>
                    <p className='itm-d-descriptiom'>{item.plot}</p>
                    <Toaster position="top-center" reverseOrder={false}/>
                    <ItemCount count={count} handleLess={handleLess} handlePlus={handlePlus} handleOnAdd={handleOnAdd} />
                </div>
            </div>
        </article>

    )
}