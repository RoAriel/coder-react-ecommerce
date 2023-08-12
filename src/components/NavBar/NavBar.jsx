import './NavBar.css'
import { Link } from "react-router-dom";
import { CartWidget } from '../CartWidget/CartWidget'

export function NavBar() {
    return (
            <div className='nav-container'>

                    <Link to='/'><img src="src/assets/img/jump-force_logo.png" alt="logo-Jump" /></Link>

                    <nav className='nav-rout'>
                        <a className='category' href="#"><h4>Home</h4></a>
                        <a className='category' href="#"><h4>Mangas</h4></a>
                        <a className='category' href="#"><h4>Manhwas</h4></a>
                    </nav>
                <div>
                    <div>
                        <CartWidget />
                    </div>
                </div>
            </div>

    )
}