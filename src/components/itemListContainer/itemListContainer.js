import './ItemListContainer.css'
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList  from "../itemList/itemList"
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect (()=>{
        setLoading(true)
        const asyncFunction=categoryId ? getProductsByCategory : getProducts
        
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error=>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
    }, [categoryId])  

    if(loading) {
        return <h2>Cargando...</h2>
    }

    return(
        <div onClick={()=> console.log('click en ItemListContainer') }> 
            <h1>{greeting}</h1>
            <ItemList products={products}/> 
        </div>
        
    )
}; 

export default ItemListContainer;