import './Item.css';


export function Item({ item }) {

    return (
        <button className='card'>
                <div className='container'>
                    <img src={item.urlImage} alt="front manga" />
                </div>
                <div className='content'>
                    <h2 className='title'>
                        {item.name}
                    </h2>
                </div>
        </button>
    )
}