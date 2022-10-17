import "./navbar.css";
import CartWidget from "../cartWidget/cartWidget";
import { NavLink } from 'react-router-dom'
import logo from "./assets/icaro-paragliders-logo.png"

const Navbar = () => {
    return (
       <nav className="navbar container-fluid">
            <NavLink to='/'> 
                <img src={logo} alt="logo" className="logo" />
            </NavLink>
            <div className="botones">       
                <button>Nosotros</button>
                <button>Parapentes</button>
                <button>Accesorios</button>
            </div>
            <div className="cartWdg">
                <CartWidget />
            </div>
    </nav>
    )
};

export default Navbar; 

