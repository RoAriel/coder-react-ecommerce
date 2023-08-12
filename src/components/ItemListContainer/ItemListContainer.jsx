import './ItemListContainer.css'
import { useEffect, useState } from "react"
import {Loader } from '../Loader/Loader'
import { ItemList } from "../ItemList/ItemList";

export function ItemListContainer(){
    
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

    if(isLoading) return <Loader/>

    return(
        <section className='ilc-container'>
            <ItemList items={items}/>
        </section>
    )
}