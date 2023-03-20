import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();


const CartContextprov = ({children})=>{
    const [Cart, setCart] = useState([]);
    
    const additem = (item, cantidad) =>{
        if (isincart(item.index)){
            let posi = Cart.findIndex(element => element.index === item.index);
            Cart[posi].cantidad += cantidad;
            setCart([...Cart]);
        }else{
            setCart([...Cart, {...item, cantidad : cantidad}]);
        }
    }
    const removeitem = (itemid) =>{
     const items = Cart.filter(item => item.index !== itemid);
     setCart([...items]);
    }
    const clear = () => {
        setCart([]);

    }
    const isincart = (itemid) => {
        return Cart.some(item => item.index === itemid);
    }

    const carttotal = ()=>{
        return Cart.reduce((accum, item)=> accum += item.cantidad, 0);
    }
    const cartsum = ()=>{
        return Cart.reduce((accum, item)=> accum += item.cantidad * item.precio, 0);
    }

    return(
       <CartContext.Provider value={{Cart, additem, removeitem, clear, carttotal,cartsum }}>
        {children}
       </CartContext.Provider>
    )
}

export default CartContextprov;