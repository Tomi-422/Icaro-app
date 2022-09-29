import "./navbar.css";

const Navbar = () => {
    return (
        <nav class="nav navbar-light bg-light d-flex">
            <p class="navbar-brand">Tienda Icaro</p> 
            <div class="d-flex flex-row"> 
                <ul class="nav">
                    <li class="nav-item">
                        <button class="nav-link">Nosotros</button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link">Parapentes</button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link">Accesorios</button>
                    </li>
                </ul>
            </div>    
        </nav>
    )
};

export default Navbar; 