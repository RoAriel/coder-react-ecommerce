import './BuyForm.css'
export function BuyForm(){
    return(
        <section>
            <form className="form-buy-data">
              <input type="text"  placeholder="Enter your Name"/> 
              <input type="text" placeholder="Enter your phone number"/> 
              <input type="email"  placeholder="Enter your Email"/> 
              <button className='bts bt-add bg-gradiant'>Complete you buy!</button>
            </form>
        </section>
    )
}