import "./ItemCount.css"
import { useState } from "react"
import { IconPlus, IconLess, CartIcon } from "../Icon/Icon"

export function ItemCount({stock, initial, onAdd}){

    const [count, setCount] = useState(initial)

    const handleLess = () =>{
        if (count <= 1 ) {return} else {setCount(count - 1)}
    }

    const handlePlus = () =>{

        if (count < stock){
            setCount(count+1)
            console.log(count)
        }else{
            console.log('pase')
            return
        }
    }

    const handleOnAdd =() =>{
        onAdd(count)
    }
    return (
        <section className="item-section">

            <div className="item-count bg-gradiant">
                <button onClick={handleLess} className="item-count-bts"> <IconLess /> </button>
                    <div className="item-container-count">
                        <span>{count}</span>
                    </div>
                <button onClick={handlePlus} className="item-count-bts "> <IconPlus /> </button>
            </div>
            <button onClick={handleOnAdd} className="item-count-bts bt-add bg-gradiant"> Add to Cart <CartIcon/> </button>
        </section>
    )
}