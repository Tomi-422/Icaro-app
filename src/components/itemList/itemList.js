import './ItemList.css'
import Item  from "../item/item"

const ItemList = ({products, setPage})=> {
    return (
        <div className='ListGroup'> 
           { products.map(prod => <Item key={prod.id} {...prod} setPage={setPage}/>) } 
        </div>
    )
}

export default ItemList

