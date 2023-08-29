import './ItemDetailContainer.css'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useEffect, useState } from "react"
import { Loader } from '../Loader/Loader'
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { NotFound } from '../NotFound/NotFound';

export function ItemDetailContainer() {

    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState([]);
    const id = useParams().itemId

    useEffect(() => {

        const itemRef = doc(db, "items", id)
        getDoc(itemRef)
            .then((resp) => {
                setItem({ ...resp.data(), id: resp.id }),
                    setIsLoading(false)
            })           
    }, [])

    if (isLoading) return <Loader />

    if (item.name === undefined) return <NotFound search={{data:'Manga/Manhwa'}}/>

    return (
        <section className="idc-container">
            <ItemDetail item={item} />
        </section>
    )
}