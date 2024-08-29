import React from 'react'
import { useState,useEffect } from "react"
import "./ItemDetailContainer.css"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState("")

    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch ('/products.json')
                const data = await response.json()
                const newProduct = data.find(p => p.id === Number(id) )
                setProduct(newProduct)
            }catch(error){
                console.log(error)
            }
        }
        fetchData()
    },[])


    return (
        <div className='carritoList'>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer
