import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'

export function NavBar() {
    return (
            <div className='nav-container'>

                    <img src="src/assets/img/jump-force_logo.png" alt="logo-Jump" />

                    <nav className='nav-rout'>
                        <a href="#"><h4>Home</h4></a>
                        <a href="#"><h4>Mangas</h4></a>
                        <a href="#"><h4>Manhwas</h4></a>
                    </nav>
                <div>
                    <div>
                        <CartWidget />
                    </div>
                </div>
            </div>

    )
}