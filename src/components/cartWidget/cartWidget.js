import "./cartWidget.css";
import cart from "./assets/carrito.png" 
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext) 
       
    return (
        <Link className="text-decoration-none" to={`/cart`}>
            <div className="cartWidget"> 
                <img className="cartImg" src={cart} alt='cart'/>
                {totalQuantity}
            </div>
        </Link>
    )
}

export default CartWidget; 