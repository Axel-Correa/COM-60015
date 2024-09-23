import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext/CartProvider';
import { useContext } from 'react';


const ItemDetail = ({product}) => {
    const {addItems} = useContext (cartContext);
    const onAdd = (quantity) => { 
        addItems(product, quantity);
    };
    return (
        <div className='carrito'>
            <img src={product.imagen} alt={product.nombre}/>
            <h2>{product.nombre}</h2>
            <p>$ {product.precio}</p>
            <p>Stock: {product.stock}</p>
            <p>Categoria: {product.category}</p>
            <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
            <Link to= "/cart">Ir al carrito</Link>
        </div>
    );
};

export default ItemDetail
