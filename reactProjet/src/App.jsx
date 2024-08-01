import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "../src/App.css"
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() { 
  const [count, setCount] = useState(0)
  return (
    <div className='Todo'>
      <header>
        <Navbar/>
      </header>
      <main>
        <ItemListContainer greeting= "Bienvenido a Ccristales"/>
      </main>
    </div>
  )
}

export default App
