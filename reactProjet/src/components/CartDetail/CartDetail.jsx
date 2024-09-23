import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../context/CartContext/CartProvider'
import "./CartDetail.css"

const CartDetail = ({cart}) => {
    const {getTotal, getTotalProducts, removeItem, clearCart, buy} = useContext (cartContext)
return (
    <div className='cartdetail'>
        <h2>Carrito de compras</h2>
        {cart.map((item) =>(
            <div key= {item.product.id}>
                <p>{item.product.nombre}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.product.precio}</p>

                <button onClick={()=> removeItem(item.product.id)}>Eliminar</button>
            </div>
        ))}
        {cart.length > 0 &&(
            <>
                <h3>Total Productos :{getTotalProducts()}</h3>
                <h3>Total a pagar ${getTotal()}</h3>
                <button onClick={clearCart}>Vaciar el carrito</button>
                <button onClick={buy}>Comprar</button>
            </>
        )}
    </div>
)
}

export default CartDetail
