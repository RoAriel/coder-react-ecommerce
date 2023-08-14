import './NavBar.css'
import { Link } from "react-router-dom";
import { CartWidget } from '../CartWidget/CartWidget'

export function NavBar() {
    return (
            <div className='nav-container'>
                    <Link to='/'><img src='src/assets/img/jump-force_logo.png' alt="logo-Jump" /></Link>
                    <nav className='nav-rout'>
                        <Link className='category' to="/"><h4>Home</h4></Link>
                        <Link className='category' to="/category/manga"><h4>Mangas</h4></Link>
                        <Link className='category' to="/category/manhwa"><h4>Manhwas</h4></Link>
                    </nav>
                <div>
                    <Link to="/shop"><CartWidget /></Link>
                </div>
            </div>

    )
}