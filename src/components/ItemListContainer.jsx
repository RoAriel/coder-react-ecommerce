import { ItemCount } from "./ItemCount/ItemCount";
// d-flex justify-content-center aling-self-center
export function ItemListContainer({greeting}){
    return(
        <div className="itemsCount">
            <h1>{greeting}</h1>
            <ItemCount />
        </div>
    )
}