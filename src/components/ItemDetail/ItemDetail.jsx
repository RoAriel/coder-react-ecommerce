import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount'
export function ItemDetail({ name, price, stock, image, plot,volumen }) {

    const formatPrice = new Intl.NumberFormat().format(parseFloat(price))
    return (
        <article className='item-detail'>
            <div className='id-img'>
                <img src={image} alt="front manga" />
            </div>
            <div className='itm-d-detail'>
                <div className='itm-d-content'>
                    <h2 className='itm-d-title'>
                    {name+' v.'+volumen}
                    </h2>
                    <p className='itm-d-price'>${formatPrice}</p>
                    <p className='itm-d-descriptiom'>{plot}</p>
                    <ItemCount stock={stock} initial={1} />
                </div>
            </div>
        </article>

    )
}