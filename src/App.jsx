import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer';


export function App() {

  return (
    <>
      <NavBar />
      <section className='mt-3'>
        <ItemListContainer greeting={"Hola a todos I'm here!"} />
      </section>

    </>
  )
}

