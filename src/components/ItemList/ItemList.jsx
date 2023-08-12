import './ItemList.css'
import { Item } from '../Item/Item'
export function ItemList({ items = [] }) {

    return (
        <section className='il-container'>
            {items.map((item) => {
                return (
                    <Item
                        key={item.id}
                        image={item.urlImage}
                        name={item.name}
                    />
                )
            })}
        </section>
    )
}