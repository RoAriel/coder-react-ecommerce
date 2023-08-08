import './Item.css';
import { BtDetail } from "../BtDetail/BtDetail"

export function Item({ item }) {

    const pictureUrl = `${item.pictureUrl}`
    const price = new Intl.NumberFormat().format(parseFloat(item.price))
    return (
        <div className='item-card'>
            <div className='item-container'>
                <img src={pictureUrl} alt="product" />
            </div>
            <div className='content'>
                <h2 className='item-title'>
                    {item.title}
                </h2>
                <p className='item-price'>${price}</p>
                <p className='item-prev-descript'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, itaque. Nobis tempora officia eos consequatur, odio perferendis sit quod, non iusto odit id cum dolorem cupiditate sapiente nihil fugiat ipsum.</p>
            </div>
            <BtDetail />
        </div>
    )
}