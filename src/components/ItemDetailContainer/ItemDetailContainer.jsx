import './ItemDetailContainer.css'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useEffect, useState } from "react"
import { Loader } from '../Loader/Loader'
import { getItem } from '../Utils/asyncMock'
import { useParams } from 'react-router-dom';

export function ItemDetailContainer() {

    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState([]);
    const id = useParams().itemId
    
    useEffect(() => {
        getItem(id)
        .then(item => {
            setItem(item)
            setIsLoading(false)
            })
    }, [])

    if (isLoading) return <Loader />
    return (

        <section className="idc-container">
            <ItemDetail
                name={item.name}
                price={item.price}
                stock={item.stock}
                image={item.urlImage}

            />
        </section>
    )
}