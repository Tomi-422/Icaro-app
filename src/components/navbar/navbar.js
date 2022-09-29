import "./navbar.css";
import CartWidget from "../cartWidget/cartWidget";

const Navbar = () => {
    return (
        <nav class="navbar">
            <div> 
               <span>Tienda Icaro</span>
            </div>
            <div class="botones">       
                <button>Nosotros</button>
                <button>Parapentes</button>
                <button>Accesorios</button>
            </div>
            <CartWidget />
        </nav>
    )
};

export default Navbar; 

//style={{alignText:"center"}}