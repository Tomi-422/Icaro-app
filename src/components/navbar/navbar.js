import "./navbar.css";
import { useState, useEffect } from "react";
import CartWidget from "../cartWidget/cartWidget";
import { NavLink } from 'react-router-dom'
import logo from "./assets/icaro-paragliders-logo.png"
import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase'


const Navbar = () => {

    const [categories, setCategories] = useState([])

    useEffect(()=> {
        const colectionRef = query(collection(db, 'categories'), orderBy('order'))

        getDocs(colectionRef).then(response => {
            const categoriesAdapted = response.docs.map(doc=> {
                const data = doc.data()
                const id = doc.id

                return { id, ...data }
            })
            setCategories(categoriesAdapted)
        })
    }, [])



    return (
       <nav className="navbar container-fluid">
            <NavLink to='/'>   
                <img className="logo" src={logo} alt="Icaro Paragliding"/>
            </NavLink>

            <div>       
                {
                categories.map(cat => (
                    <NavLink key={cat.id} to={`/category/${cat.slug}`} className={"botones"}>{cat.label}</NavLink>
                ))
                }
            </div>
            <div className="cartWdg">
                <CartWidget />
            </div>
    </nav>
    )
};

export default Navbar; 

