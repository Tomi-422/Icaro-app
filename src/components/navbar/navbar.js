import "./navbar.css";
import CartWidget from "../cartWidget/cartWidget";

const Navbar = () => {
    return (
        <nav class="navbar container-fluid">
            <div class="logo"> 
               <span>Tienda Icaro</span>
            </div>
            <div class="botones">       
                <button>Nosotros</button>
                <button>Parapentes</button>
                <button>Accesorios</button>
            </div>
            <div class="cartWdg">
                <CartWidget />
            </div>
        </nav>
    )
};

export default Navbar; 

