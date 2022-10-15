import "./navbar.css";
import CartWidget from "../cartWidget/cartWidget";

const Navbar = () => {
    return (
        <nav className="navbar container-fluid">
            <div className="logo"> 
               <span>Tienda Icaro</span>
            </div>
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

