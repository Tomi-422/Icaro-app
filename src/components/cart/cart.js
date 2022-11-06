import { useContext } from "react"
import { CartContext } from "../../context/cartContext"

const Cart = () => {

    const { cart, removeItem, total, clearCart } = useContext(CartContext)

    return (
        <div>
            <h1>CART</h1>
            {
                cart.map(prod => (
                    <div key={prod.id}>
                        Articulo: {prod.nombre} - cantidad: {prod.quantity} precio unitario: ${prod.precio} subtotal: ${prod.quantity * prod.precio} 
                        <button onClick={()=> removeItem(prod.id)}>remover articulo</button>
                    </div>
                ))
            }
            <div> 
                Precio Total: ${total}
            </div>
            <div>
                <button onClick={()=> clearCart()}>Borrar carrito</button>
            </div>
        </div>
    )
}

export default Cart 