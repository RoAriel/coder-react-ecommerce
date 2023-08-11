import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { NavBar } from '../NavBar/NavBar'
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';


export function App() {

  return (
    <>
    <header>
      <NavBar className='app-header' />
    </header>
      <main className='app-main' >
        <ItemListContainer greeting={"Hello everyone, I'm here!"}/>
      </main>

    </>
  )
}

