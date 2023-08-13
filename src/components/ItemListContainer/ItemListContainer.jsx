import './ItemListContainer.css'
import { getItems } from '../Utils/asyncMock'
import { useEffect, useState } from "react"
import { Loader } from '../Loader/Loader'
import { ItemList } from "../ItemList/ItemList";

export function ItemListContainer() {

    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems()
            .then((res) => {
                setItems(res)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) return <Loader />

    return (
        <section className='ilc-container'>
            <ItemList items={items} />
        </section>
    )
}