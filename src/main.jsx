import React from 'react'
import ReactDOM from 'react-dom/client'
import {  BrowserRouter, Route, Routes } from "react-router-dom";

import { App } from './components/App/App'

import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)

