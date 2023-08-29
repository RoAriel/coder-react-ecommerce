import { createContext, useState } from "react";

export const CartContext = createContext([])

export function CartProvider({ children }) {


    const [cartList, setCartList] = useState([])

    const addToCart = (item, count) => {

        let newItem = { ...item, count }
        let newCartList = [...cartList]

        let isInCart = newCartList.find((item) => item.id === newItem.id)

        isInCart ? isInCart.count += count : newCartList.push(newItem)

        setCartList(newCartList)
    }

    const removeList = () => {
        setCartList([])
    }

    const deleteItem = (itemToDel) => {

        let indexItem = [...cartList].findIndex(i => i.id === itemToDel.id)

        let newCartList = [...cartList]

        indexItem !== -1 &&
            newCartList[indexItem].count > 1 ? newCartList[indexItem].count -= 1 : newCartList.splice(indexItem, 1)

        setCartList(newCartList)
    }

    const ammountInCart = () => {
        return cartList.reduce((acc, item) => acc + item.count, 0)
    }

    const totalPrice = () => {
        return cartList.reduce((acc, item) => acc + parseFloat(item.price) * item.count, 0)
    }


    return <CartContext.Provider value={{
        cartList,
        ammountInCart,
        totalPrice,
        addToCart,
        removeList,
        deleteItem,

    }}>
        {children}
    </CartContext.Provider>
}