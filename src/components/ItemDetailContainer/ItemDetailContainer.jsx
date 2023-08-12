import './ItemDetailContainer.css'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useEffect, useState } from "react"
import {Loader } from '../Loader/Loader'
import { useParams } from 'react-router-dom';

export function ItemDetailContainer({id}){

    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState([]);
    
    useEffect(() => {
        fetch("product.json")
            .then(response => {
                return response.json()
            })
            .then(data => {
                const newItem = data.filter(item => item.id === id)
                setItem(newItem)
                setIsLoading(false)
            }).catch(console.error('Algo salio mal'))
    }, [])

    if(isLoading) return <Loader/>
    return (
       
        <section className="idc-container">
            <ItemDetail 
                name={item[0].name}
                price={item[0].price}
                stock={item[0].stock}
                image={item[0].urlImage}
                
            />
        </section>
    )
}