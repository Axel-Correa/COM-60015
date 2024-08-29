import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error from "./components/Error/Error"
import {BrowserRouter,Routes,Route} from "react-router-dom"



function App() { 
  const [count, setCount] = useState(0)
  return (
    <div className='todo'>
      <BrowserRouter>
        <Navbar/>
        
        <Routes>

          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='*' element= {<Error/>}/>

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
