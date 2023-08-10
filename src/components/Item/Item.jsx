import './Item.css';
import { BtDetail } from "../BtDetail/BtDetail"

export function Item({ item }) {

    return (
        <div className='card'>
            <div className='container'>
                <img src={item.image} alt="product" />
            </div>
            <div className='content'>
                <h2 className='title'>
                    {item.name}
                </h2>

            </div>
            <BtDetail />
        </div>
    )
}