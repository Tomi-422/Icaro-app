import './ItemListContainer.css'
import { useState, useEffect } from "react";
import ItemList  from "../itemList/itemList"
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemListContainer = ({greeting}) => {
 
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        document.title = 'Listado de productos'
    }, [])

    useEffect (() => {
        setLoading(true)
        const collectionRef =  categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')
        
        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()

                return { id: doc.id, ...data }
            })
            setProducts(productsAdapted)
        }).catch(error=>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
    }, [categoryId])  

    if(loading) {
        return (
        <><div className="spinner-border spinner" role="status">
                <span className="visually-hidden">Loading...</span>
            </div><div className="text">
                    <p>cargando...</p>
                </div></>
         )
    }

    return(
        <div>
            <ItemList products={products}/> 
        </div>     
    )
}; 

export default ItemListContainer;