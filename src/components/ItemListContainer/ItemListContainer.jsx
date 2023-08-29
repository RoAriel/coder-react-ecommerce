import { useEffect, useState } from "react"
import { Loader } from '../Loader/Loader'
import { ItemList } from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { collection, getDocs, getDoc, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

export function ItemListContainer() {

    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const category = useParams().category
    useEffect(() => {

        const itemsRef = collection(db, "items");
        const qry = category ? query(itemsRef, where("category", "==", category)) : itemsRef

        getDocs(qry)
            .then((resp) => {
                setItems(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            }
                , setIsLoading(false)
            )
    }, [category])

    if (isLoading) return <Loader />

    return (
        <section className='ilc-container'>
            <ItemList items={items} category={category} />
        </section>
    )
}