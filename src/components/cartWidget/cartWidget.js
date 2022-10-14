import "./cartWidget.css";
import cart from "./assets/carrito.png" 

const CartWidget = () => {
    return (
        <div to='/cart' className="cartWidget">
             <img className="cartImg" src={cart} alt='cart'/>
             {5}
        </div>
    )
}

export default CartWidget; 