import { createContext, useState} from "react";

export const cartContext = createContext();

export const CartProvider =({children}) =>{
    const [cart, setCart] = useState([]);

    //AGREGAR AL CARRITO
    const addItems  = (product, quantity) =>{
        if (isInCart(product.id)){
            setCart(
                cart.map((item) =>
                    item.product.id === product.id 
                    ? {... item,quantity: item.quantity + quantity}
                    : item  
                )   
            );
        } else{
            setCart([...cart,{product,quantity}]);
        }
    };

    //BORRAR DEL CARRITO
    const removeItem = (productId) => {
        setCart(cart.filter((item)=> item.product.id !== productId));
    };

    //VER MI CARRITO
    const isInCart = (productId) => {
        return cart.some ((item)=> item.product.id === productId)
    };

    //LIMPIAR MI CARRITO
    const clearCart = () =>{
        setCart ([]);
    };

    //TOTAL DEL CARRITO
    const getTotal = () => {2
        return cart.reduce ((total , item) => total + item.product.precio*item.quantity,0)
    };

    //TOTAL PRODUCTOS 
    const getTotalProducts = () => {
        return cart.reduce((total, item)=> total + item.quantity, 0)
    };
    
    //COMPRAR
    const buy = () => {
        console.log ("Se realizo la compra con éxito");
        clearCart();
    };

    return (
        <cartContext.Provider
        value={{
            cart,
            addItems,
            removeItem,
            isInCart,
            clearCart,
            getTotal,
            getTotalProducts,
            buy,
        }}
        >
            {children}
        </cartContext.Provider>
    );
};

export default CartProvider