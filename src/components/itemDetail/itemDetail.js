import './ItemDetail.css'
import Counter from "../itemCount/itemCount"
// import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'


const ItemDetail = ({id, nombre, precio, stock, description, img}) => {

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, nombre, precio, quantity, 
        }
        
        addItem(productToAdd)
    }
    

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
                <Counter onAdd={handleOnAdd} stock={stock} />      
            </footer>
        </article>
    )

}

export default ItemDetail