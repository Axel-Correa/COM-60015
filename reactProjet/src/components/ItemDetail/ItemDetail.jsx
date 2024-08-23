import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({product}) => {
    return (
        <div className='carrito'>
            <img src={product.imagen} alt={product.nombre}/>
            <h2>{product.nombre}</h2>
            <p>{product.precio}</p>
            <p>{product.stock}</p>
            <p>Categoria: {product.category}</p>
        </div>
    )
}

export default ItemDetail
