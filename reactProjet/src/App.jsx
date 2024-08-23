import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import error from "./components/error/error"
import {BrowserRouter,Routes,Route} from "react-router-dom"



function App() { 
  const [count, setCount] = useState(0)
  return (
    <div className='todo'>
      <header>
        <Navbar/>
      </header>
      <main>
        <ItemListContainer greeting= "Bienvenido a Ccristales"/>
        <ItemDetailContainer/>
      </main>
    </div>
  )
}

export default App
