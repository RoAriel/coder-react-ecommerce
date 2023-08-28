import './NavBar.css'
import logoJump from '../../assets/img/jump-force_logo.png'
import { Link } from "react-router-dom";
import { CartWidget } from '../CartWidget/CartWidget'

export function NavBar() {
    return (
            <div className='nav-container'>
                    <Link to='/'><img src={logoJump} alt="logo-Jump" /></Link>
                    <nav className='nav-rout'>
                        <Link className='category' to="/"><h4>Home</h4></Link>
                        <Link className='category' to="/category/mangas"><h4>Mangas</h4></Link>
                        <Link className='category' to="/category/manhwas"><h4>Manhwas</h4></Link>
                    </nav>
                <div>
                    <Link to="/cart"><CartWidget /></Link>
                </div>
            </div>

    )
}