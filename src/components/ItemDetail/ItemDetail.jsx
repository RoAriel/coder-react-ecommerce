import './ItemDetail.css';
import {ItemCount} from '../ItemCount/ItemCount'
export function ItemDetail({ item }) {

    const price = new Intl.NumberFormat().format(parseFloat(item.price))
    return (
        <article className='card'>
            <div className='container'>
                <img src={item.image} alt="product" />
            </div>
            <div className='content'>
                <h2 className='title'>
                    {item.name}
                </h2>
                <p className='price'>${price}</p>
                <p className='descriptiom'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, itaque. Nobis tempora officia eos consequatur, odio perferendis sit quod, non iusto odit id cum dolorem cupiditate sapiente nihil fugiat ipsum.</p>
            </div>
        <ItemCount stock={item.stock} initial={1}/>
        </article>
    )
}