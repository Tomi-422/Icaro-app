import "./cartWidget.css";
import cart from "./assets/carrito.png" 
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext) 
       
    return (
        <div className="cartWidget">
            <Link to={`/cart`}>
                <img className="cartImg" src={cart} alt='cart'/>
                {totalQuantity}
            </Link>
        </div>
    )
}

export default CartWidget; 