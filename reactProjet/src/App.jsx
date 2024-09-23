import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error from "./components/Error/Error"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import CartProvider from './context/CartContext/CartProvider'
import Cart from './components/Cart/Cart';





function App() { 
  const [count, setCount] = useState(0)
  return (
    <CartProvider>
      <div className='todo'>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='*' element= {<Error/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>

  )
}

export default App
