import { Item } from "./Item/Item";

export function ItemListContainer({greeting}){

    const item = { 
        id:1,
        title: 'Reloj',
        price: 120000,
        pictureUrl: 'https://www.casio.com/content/dam/casio/product-info/locales/latin/es-ar/timepiece/product/watch/G/GM/GMD/gmd-s5600ba-3/assets/GMD-S5600BA-3_front.jpg' 
    }
    return(
        <div className="itemsCount">
            <h1>{greeting}</h1>
            <Item item={item}/>

        </div>
    )
}