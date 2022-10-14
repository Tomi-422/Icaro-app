import './ItemDetail.css'
import Counter from "../itemCount/itemCount"

const ItemDetail = ({id, nombre, precio, stock, description}) => {

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, nombre, precio, quantity
        }
        console.log(productToAdd)
    }

    return(
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>{nombre}</h2>
            </header>
            {/* <picture>
                <img src={img} alt={nombre} className="ItemImg" />
            </picture>  */}
            <section>
                <p className='Info'>
                    Descripción: {description}
                </p>
                <p className='Info'>
                    Precio: ${precio}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Counter onAdd={handleOnAdd} stock={stock} />
            </footer>
        </article>
    )

}

export default ItemDetail