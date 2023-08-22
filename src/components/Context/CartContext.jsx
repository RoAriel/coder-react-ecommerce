import { createContext, useState } from "react";

export const CartContext = createContext([])

export function CartProvider({ children }) {

    const [cartQuantity, setQuantity] = useState(0)
    const [cartList, setCartList] = useState([])

    const incrementCartQuantity = () => {
        setQuantity(cartQuantity + 1)
    }

    const addToCart = (item) => {
        setCartList(cartList.push(item))
        setQuantity(cartQuantity + 1)
    }

    const removeList = () => {
        setCartList([])
    }

    const deleteItem = (id) => {
        let item = (cartList.find(i => i.id === id))[0]
        let idexItem = cartList.indexOf(item);
        idexItem !== -1 && setCartList(cartList.splice(idexItem, 1))
    }


    return <CartContext.Provider value={{
        cartQuantity: cartQuantity,
        incrementCartQuantity: incrementCartQuantity,
        addToCart: addToCart,
        removeList: removeList,
        deleteItem: deleteItem,
    }}>
        {children}
    </CartContext.Provider>
}