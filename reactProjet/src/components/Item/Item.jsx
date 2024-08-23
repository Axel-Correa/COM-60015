import React from 'react'
import "./Item.css"
const Item = ({item}) => {
    return (
        <div key={item.id} className='carrito'>
            <h2>{item.nombre}</h2>
            <img src= {item.imagen} alt={item.nombre}/>
        </div>
    )
}

export default Item
