import './NotFound.css'
import { IconBook, IconHome } from '../Icon/Icon';
import { Link } from "react-router-dom";

export function NotFound({ search }) {
    return (
        <>
            <div className="nf-container">
                <h1>Sorry, {search.data} not Found!.</h1>
            </div>
            <div className='nf-link-container'>
                <Link className='nf-link' to='/'>Go back home <IconHome/></Link>
                <Link className='nf-link' to='/category/mangas'>Go back to Mangas <IconBook/></Link>
                <Link className='nf-link' to='/category/manhwas'>Go back to Manhwas <IconBook/></Link>
            </div>
        </>
    )
}