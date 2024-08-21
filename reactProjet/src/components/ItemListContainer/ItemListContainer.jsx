import { useState,useEffect } from "react"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"


const ItemListContainer =({greeting})=> {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch ('/products.json')
                const data = await response.json()
                setProducts(data)
            }catch(error){
                console.log(error)
            }
        }
        fetchData()
    },[])

    return(
        <div className="contenedor">
            <h1>{greeting}</h1>
            <ItemList product={products}/>
        </div>
    )
}
export default ItemListContainer