import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { App } from './components/App/App'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemShop } from './components/ItemShop/ItemShop'
import {CartProvider} from './components/Context/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(

    <React.StrictMode>
        <CartProvider>
            <BrowserRouter>
                <header>
                    <NavBar className='app-header' />
                </header>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                    <Route path='/category/:category' element={<ItemListContainer />} />
                    <Route path='/cart' element={<ItemShop />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    </React.StrictMode>
)

