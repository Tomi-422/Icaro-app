import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img, category}) => {

    return(
        <article className="CardItem">
            <picture>
                <img src={img} alt={nombre} className="ItemImg"/>
            </picture> 
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <section>
                <p className="Info">
                    Homologacion: {category}
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>
            </section>           
            <footer className='ItemFooter'>
               <Link to={`/detail/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item