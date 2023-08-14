import './ItemListContainer.css'
import { getItems, getCategory } from '../Utils/asyncMock'
import { useEffect, useState } from "react"
import { Loader } from '../Loader/Loader'
import { ItemList } from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

export function ItemListContainer() {

    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const category = useParams().category
    useEffect(() => {
        if (category) {
            getCategory(category)
            .then((res) => {
                setItems(res)
                setIsLoading(false)
            })
        } else {
            getItems()
            .then((res) => {
                setItems(res)
                setIsLoading(false)
            })
        }
    }, [category])
    
    if (isLoading) return <Loader />

    console.log(category)

    console.log(items)

    return (
        <section className='ilc-container'>
            <ItemList items={items}  category={category}/>
        </section>
    )
}