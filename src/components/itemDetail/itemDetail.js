import './ItemDetail.css'
import Counter from "../itemCount/itemCount"
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'


const ItemDetail = ({id, nombre, precio, stock, description, img, homologation}) => {

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
      <><div className="card">
      <div className="row g-0">
        <div className="col-5 col-sm-4 ItemImg">
          <img src={img} alt={nombre} className="img-fluid w-100" />
        </div>
        <div className="col-7 col-sm-8">
          <div className="card-body">
            <h4 className="card-title">{nombre}</h4>
            <p className="card-text"><strong>Descripción:</strong> {description}</p>
            <h5 className="card-title">Precio: U$D{precio}</h5>
            <p><strong>Homologacion:</strong> {homologation}</p>
          </div>
            {
              ! isInCart(id) 
                  ? <Counter onAdd={handleOnAdd} stock={stock} initial={quantityAdded} />
                  : <Link to='/cart' className='option text-decoration-none'>
                    <button className="Button" type='button'>Finalizar Compra</button>
                    </Link>
                }
        </div>
      </div>
    </div>
    </>
    )

}

export default ItemDetail
