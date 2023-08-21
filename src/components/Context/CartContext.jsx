import { createContext, useState } from "react";

export const CartContext = createContext([])

export function CartProvider({ children }) {
    const [cartQuantity, setQuantity] = useState(0)

    const incrementCartQuantity = () => {
        setQuantity(cartQuantity + 1)
    }
    return <CartContext.Provider value={{
        cartQuantity: cartQuantity,
        incrementCartQuantity: incrementCartQuantity,
    }}>
        {children}
    </CartContext.Provider>
}