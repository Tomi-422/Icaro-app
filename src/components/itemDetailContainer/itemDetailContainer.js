import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../itemDetail/itemDetail";
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
     

    useEffect(()=>{
        getProductsById(productId)
        .then(response => {
            setProduct(response)
        }).finally(()=> {
            setLoading(false)
        })
    },[productId])

    if(loading) {
        return <h2>Cargando...</h2>
    }

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer