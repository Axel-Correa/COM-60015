import React from 'react'
import "./Item.css"
const Item = ({item}) => {
    return (
        <div key={item.id} className='carrito'>
            <img src= {item.imagen} alt={item.nombre}/>
            <h2>{item.nombre}</h2>
            <p>{item.precio}</p>
            <p>{item.stock}</p>
        </div>
    )
}

export default Item
