import { useContext, useState } from "react"
import { CartContext } from "../../context/cartContext"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { db } from '../../services/firebase/index'
import { useNavigate } from "react-router-dom"
import FormCheckOut from "../formCheckout/formCheckOut"
import Swal from "sweetalert2";

document.title = `Check Out`

const CheckOut = () => {
    const [loading, setLoading] = useState(false)

    const { cart, total, clearCart } = useContext(CartContext)
    
    const navigate = useNavigate()

    const [personalData, setPersonalData] = useState(false)

    const [datosComprador, setDatosComprador] = useState({})

    const completarDatos = (name, surname, address, phone, email) => {
        setDatosComprador({name, surname, address, phone, email})
        setPersonalData(true)
    }
    
    const createOrder = async () => {
        setLoading(true)

        try {
            const objOrder = {
                buyer:datosComprador,
                items: cart,
                total: total
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })
            
            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()
                navigate('/')

                Swal.fire({
                    title: "Se genero la orden correctamente!", 
                    text: `El id de su compra es: ${orderAdded.id}`,
                    icon: "success",
                    timer: 5000
                })
                
            } else {
                clearCart()
                navigate('/')

                Swal.fire({
                    icon: 'error',
                    title: 'Lo sentimos!',
                    text: 'Algunos de los productos seleccionados esta fuera de stock!',
                    timer: 3000
                })
            }
        } catch (error) {
            console.log("error en createOrder") 
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h2>Se esta generando la orden...</h2>
    }

    return (
        <div>
            <h1>checkout</h1>
            <h2>Complete los datos para generar la orden</h2>
            <FormCheckOut completarDatos={completarDatos} /> 
            { personalData? createOrder() : "" }
        </div>
    )
}

export default CheckOut