import { useEffect, useState } from 'react'
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
import CheckOut from './components/CheckOut/CheckOut';

import {db} from "./main";
import { getFirestore,collection, getDocs, query, orderBy, where} from 'firebase/firestore';





function App() { 
  const [products, setProducts] = useState([])
  useEffect(()=> {
    const db = getFirestore();
    const q = query(collection(db, "item"), orderBy("categoría", "asc"));


    getDocs(q).then((querySnapshot)=> {
      if (querySnapshot.size === 0){
        console.log("No hay resultados");
      }
      setProducts(
        querySnapshot.docs.map((doc)=> ({id: doc.id, ...doc.data() }))
      );
    })
  }, []);

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
            <Route path='/checkOut' element={<CheckOut/>}/>
            <Route path='*' element= {<Error/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>

  )
}

export default App
