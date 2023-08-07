import { IconPlus, IconLess } from "../Icon"
import "./ItemCount.css"
import { useState } from "react"

export function ItemCount(){

    const [count, setCount] = useState(0)

    const handleLess = () =>{
        if (count <= 0 ) {return} else {setCount(count - 1)}
    }

    const handleAdd = () =>{
        setCount(count+1)

    }
    return (
        <div className="item-count">
            <button onClick={handleLess} className="item-bt bt-less"> <IconLess /> </button>
                <div className="item-container-count">
                    <span>{count}</span>
                </div>
            <button onClick={handleAdd} className="item-bt bt-plus"> <IconPlus /> </button>
        </div>
    )
}