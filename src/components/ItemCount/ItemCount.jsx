import "./ItemCount.css"
import { IconPlus, IconLess, CartIcon } from "../Icon/Icon"

export function ItemCount({ count, handleLess, handlePlus, handleOnAdd }) {
    return (
        <section className="item-section">

            <div className="item-count bg-gradiant">
                <button onClick={handleLess} className="item-count-bts"> <IconLess /> </button>
                <div className="item-container-count">
                    <span>{count}</span>
                </div>
                <button onClick={handlePlus} className="item-count-bts "> <IconPlus /> </button>
            </div>
            <button onClick={handleOnAdd} className="item-count-bts bt-add bg-gradiant"> Add to Cart <CartIcon /> </button>
        </section>
    )
}