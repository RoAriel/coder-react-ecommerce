import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount'
export function ItemDetail({ name, price, stock, image }) {

    const formatPrice = new Intl.NumberFormat().format(parseFloat(price))
    return (
        <article className='itm-d-body'>
            <div className=''>
                <img src={image} alt="front manga" />
            </div>
            <div className='itm-d-content'>
                <h2 className='itm-d-title'>
                    {name}
                </h2>
                <p className='itm-d-price'>${formatPrice}</p>
                <p className='itm-d-descriptiom'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, itaque. Nobis tempora officia eos consequatur, odio perferendis sit quod, non iusto odit id cum dolorem cupiditate sapiente nihil fugiat ipsum.</p>
            </div>
            <ItemCount stock={stock} initial={1} />
        </article>
    )
}