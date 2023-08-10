import './ItemList.css'
import { useEffect, useState } from "react"
import { Item } from '../Item/Item'
export function ItemList() {

    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("product.json")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setItems(data)
                setIsLoading(false)
            })
    }, [])




    return (
        <section>
            {isLoading && <h4>Cargando...</h4>}
            <div className="container">
            {!isLoading && items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
                
            </div>
        </section>
    )
}