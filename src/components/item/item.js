import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio }) => {

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            {/* <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture> */}
            <section>
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