import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../NavBar/NavBar'
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';


export function App() {

  return (
    <>
      <NavBar />
      <main >
        <ItemListContainer greeting={"Hello everyone, I'm here!"}/>
      </main>

    </>
  )
}

