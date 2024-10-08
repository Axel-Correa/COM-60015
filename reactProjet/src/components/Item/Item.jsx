import React from 'react'
import  "./Item.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
    return (
        <div>
            <Link to={`/item/${item.id}`}>
                <div key={item.id} className='carrito'>
                    <h2>{item.nombre}</h2>
                    <img src= {item.imagen} alt={item.nombre}/>
                </div>
            </Link>
            <ItemCount/>
        </div>
    )
} 

export default Item
