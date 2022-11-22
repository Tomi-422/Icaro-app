import "./cart.css"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, removeItem, total, clearCart } = useContext(CartContext)

    
    document.title = `Carrito`
    

    return (
        
        
    <>
    
        <><section className="mt-5">
            <div className="container">
                <div className="cart">
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col" className="text-black">Producto</th>
                                    <th scope="col" className="text-black">Precio</th>
                                    <th scope="col" className="text-black">Cantidad</th>
                                    <th scope="col" className="text-black">Sub Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {cart.map(prod => (
                                <tr key={prod.id}>
                                    <td>
                                        <div className="main">
                                            <div className="d-flex">
                                                <img src="images/cart-1.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <p>{prod.nombre}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6>U$D {prod.precio}</h6>
                                    </td>
                                    <td>
                                        {prod.quantity}
                                    </td>
                                    <td>
                                        <h6>U$D: {prod.quantity * prod.precio}</h6>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=> removeItem(prod.id)}>Remover articulo</button>
                                    </td>
                                </tr> )) }
                            </tbody>   
                        
                        </table>
                    </div>
                </div>
            </div>
        </section></>
             
        <div className="col-lg-4 offset-lg-4">
                <div className="checkout">
                    <ul>
                        <li className="cart-total">Total
                            <span> U$D: {total}</span></li>
                    </ul>
                    <button className="btn btn-danger" onClick={()=> clearCart()}>Borrar carrito</button>
                    {cart <= 1 
                    ? ""
                    : <Link className="text-decoration-none" to='/checkout'>
                        <button className="btn btn-success" type="button">Finalizar Compra</button>
                        </Link>
                } 
                </div>
            </div>


                </>

    )
}

export default Cart 