import { IconCartEmpty } from '../Icon/Icon'
import { Link } from "react-router-dom";

export function EmptyCart() {
    return (
        <section>
            <IconCartEmpty />
            <Link to="/">
                <button> Go to home and buy!</button>
            </Link>
        </section>
    )
}