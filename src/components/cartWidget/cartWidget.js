import "./cartWidget.css";
import cart from "./assets/carrito.png" 
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext) 
       
    return (
        <div to='/cart' className="cartWidget">
             <img className="cartImg" src={cart} alt='cart'/>
             {totalQuantity}
        </div>
    )
}

export default CartWidget; 