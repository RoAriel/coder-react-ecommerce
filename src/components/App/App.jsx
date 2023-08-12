import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { NavBar } from '../NavBar/NavBar'
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';


export function App() {

  return (
    <>
    <header>
      <NavBar className='app-header' />
    </header>
      <main className='app-main' >
          {/* <ItemListContainer />  */}
         <ItemDetailContainer itemId='1' />
      </main>

    </>
  )
}

