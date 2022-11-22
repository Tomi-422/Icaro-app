import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
import ItemDetail from "../itemDetail/itemDetail";
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
     
    useEffect(() => {
        document.title = loading? 'cargando' : `Detalle ${product.nombre}`
    })

    useEffect(()=>{

        const docRef = doc (db, 'products', productId)

        getDoc (docRef).then(response => {

            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProduct(productAdapted)
        }).finally(()=> {
            setLoading(false)
        })
    },[productId])

    if(loading) {
        return (
            <><div className="spinner-border spinner" role="status">
                <span className="visually-hidden">Loading...</span>
            </div><div className="text">
                    <p>cargando...</p>
                </div></> 
        )
    }

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer