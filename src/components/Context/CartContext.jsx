import { createContext, useState } from "react";

export const CartContext = createContext([])

export function CartProvider({ children }) {

    const [cartQuantity, setQuantity] = useState(0)
    const [cartList, setCartList] = useState([])

    const incrementCartQuantity = () => {
        setQuantity(cartQuantity + 1)
    }

    const addToCart = (item) => {

        let ids = [...cartList].map(e => e.id)
        let newList = [...cartList]

        if(!ids.includes(item.id)){
            newList.push(item)
            setCartList(newList)
        }
        
    }

    const removeList = () => {
        setCartList([])
        setQuantity(0)
    }

    const deleteItem = (id) => {

        let item = [...cartList].find(i => i.id === id)[0]

        let idexItem = [...cartList].indexOf(item)

        let newCartList =[...cartList]

        idexItem !== -1 && newCartList.splice(idexItem, 1)
        
        setCartList(newCartList)

        setQuantity(cartQuantity - 1)
    }


    return <CartContext.Provider value={{
        cartList,
        cartQuantity,
        incrementCartQuantity,
        addToCart,
        removeList,
        deleteItem,
    }}>
        {children}
    </CartContext.Provider>
}