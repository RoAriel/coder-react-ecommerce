import './BuyDetail.css'
export function BuyDetail({ order }) {
    console.log(order)
    return (
        <div className='color-text'>
            <p>{order.buyer.contact.name}</p>
            <p>{order.buyer.contact.phone}</p>
            <p>{order.buyer.contact.email}</p>
        </div>
    )
}