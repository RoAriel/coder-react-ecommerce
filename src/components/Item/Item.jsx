import './Item.css';


export function Item({ image, name }) {

    return (
        <button className='i-card'>
                <div className='i-container'>
                    <img src={image} alt="front manga" />
                </div>
                <div className='i-content'>
                    <h2 className='i-title'>
                        {name}
                    </h2>
                </div>
        </button>
    )
}