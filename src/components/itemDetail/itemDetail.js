import './ItemDetail.css'
import Counter from "../itemCount/itemCount"
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'


const ItemDetail = ({id, nombre, precio, stock, description, img}) => {

    const { addItem, isInCart, getProductQuantity } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        
        const productToAdd = {
            id, 
            nombre, 
            precio,
        }
        
        addItem(productToAdd, quantity)
    }
    
    const quantityAdded = getProductQuantity(id)

    return(
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>{nombre}</h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg" />
            </picture> 
            <section>
                <p className='Info'>
                    Descripción: {description}
                </p>
                <p className='Info'>
                    Precio: ${precio}
                </p>
                <p className='Info'>
                    Stock: {stock}un.
                </p>
            </section>
            <footer className='ItemFooter'>
                {
                    ! isInCart(id) 
                        ? <Counter onAdd={handleOnAdd} stock={stock} initial={quantityAdded} />
                        : <Link to='/cart' className='option'>Finalizar Compra</Link>
                }
            </footer>
        </article>
    )

}

export default ItemDetail