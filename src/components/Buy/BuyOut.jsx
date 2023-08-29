import './BuyOut.css'
import { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { useForm } from 'react-hook-form'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

export function BuyOut() {

    const [pedidoId, setPedidoId] = useState('')
    const { cartList, totalPrice, removeList } = useContext(CartContext)
    const { register, handleSubmit } = useForm()
    const simplifiedItems = []

    cartList.map(item => {
        const { id, name, price, count } = { ...item }
        const simpleItem = { id, name, price, count }

        simplifiedItems.push(simpleItem)
    })

    const buy = (contact) => {

        const buyout = {
            buyer: { contact },
            items: simplifiedItems,
            total: totalPrice()
        }

        const buyoutsRef = collection(db, "buyouts");
        addDoc(buyoutsRef, buyout)
            .then((doc) => {
                setPedidoId(doc.id)
                removeList()
            })
    }

    if (pedidoId) {
        return (
            <div className='greetings-container'>
                <h2>Thanks for you Buy</h2>
                <p>Your buy ID is: <strong>{pedidoId}</strong></p>

            </div>
        )
    }

    return (
        <section>
            <h2 className='text-format'>Finalize your purchase</h2>
            <form name="formulario" className="form-buy-data" onSubmit={handleSubmit(buy)}>
                <input type="text" placeholder="Enter your Name"{...register("name")} />
                <input type="text" placeholder="Enter your phone number"{...register("phone")} />
                <input type="email" placeholder="Enter your Email"{...register("email")} />
                <button type="submit" className='bt-submit'>Complete you buy!</button>
            </form>
        </section>
    )
}