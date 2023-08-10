import './ItemDetailContainer.css'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { BtDetail } from '../BtDetail/BtDetail'

export function ItemDetailContainer({item}){
    return (
        <section className="container">
            <ItemDetail item={item} />
        </section>
    )
}