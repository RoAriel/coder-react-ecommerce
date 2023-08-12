import './ItemList.css'
import { Item } from '../Item/Item'
import { Link } from 'react-router-dom'
export function ItemList({ items = [] }) {

    return (
        <section className='il-container'>
            {items.map((item) => {
                return (
                    <Link>
                        <Item
                            key={item.id}
                            image={item.urlImage}
                            name={item.name}
                        />
                    </Link>
                )
            })}
        </section>
    )
}