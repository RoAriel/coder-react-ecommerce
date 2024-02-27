import './BuyOut.css'
import { simpleCart } from '../Utils/utils'
import { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { useForm } from 'react-hook-form'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { BuyDetail } from '../BuyDetail/BuyDetail'

export function BuyOut() {

    const [orderId, setOrderId] = useState('')
    const [order, setOrder] = useState({})
    const { register, handleSubmit } = useForm()
    const { cartList, totalPrice, removeList } = useContext(CartContext)

    const buy = async (contact) => {

        const newOrder = {
            buyer: { contact },
            items: simpleCart(cartList),
            date: new Date(),
            total: totalPrice(),
            state: 'generated'
        }
        
        const buyoutsRef = collection(db, "buyouts");
        try {
            const docRef = await addDoc(buyoutsRef, newOrder);
            setOrderId(docRef.id);
            removeList();
            setOrder(newOrder);

        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }



return (
    orderId
        ? <>
            <div className='greetings-container'>
                <h2>Thanks for your Buy</h2>
                <p>Your buy ID is: <strong>{orderId}</strong></p>
            </div>
            <BuyDetail order={order} />
        </>
        :
        <section className='form-container'>
            <h2 className='text-format'>Finalize your purchase</h2>
            <form name="formulario" className="form-buy-data" onSubmit={handleSubmit(buy)}>
                <input type="text" placeholder="Enter your Name"{...register("name")} />
                <input type="text" placeholder="Enter your phone number"{...register("phone")} />
                <input type="email" placeholder="Enter your Email"{...register("email")} />
                <button type="submit" className='bt-submit'>Complete your buy!</button>
            </form>
        </section>
)
}