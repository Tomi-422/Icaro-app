import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img, homologation}) => {

    return(
        <article className="CardItem">
            <picture>
                <img src={img} alt={nombre} className="imagen"/>
            </picture> 
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <section>
                <h3 className="Info">
                    Homologacion: {homologation}
                </h3>
                <p className="Info">
                    Precio: U$D {precio}
                </p>
            </section>           
            <footer className='ItemFooter'>
               <Link className='text-decoration-none' to={`/detail/${id}`}>
                <button className="Button" type="button">
                    Ver Detalle
                </button>
               </Link>
            </footer>
        </article>
    )
}

export default Item