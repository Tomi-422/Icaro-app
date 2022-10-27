import "./navbar.css";
import CartWidget from "../cartWidget/cartWidget";
import { NavLink } from 'react-router-dom'
import logo from "./assets/icaro-paragliders-logo.png"

const Navbar = () => {
    return (
       <nav className="navbar container-fluid">

            <NavLink to='/'> 
                <div className="logo">
                    <img src={logo} alt="Icaro Paragliding"/>
                </div>
            </NavLink>
            <div className="botones">       
                <NavLink to={'/category/EN -A'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>EN -A</NavLink>
                <NavLink to={'/category/EN -B'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>EN -B</NavLink>
                <NavLink to={'/category/EN -C'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>EN -C</NavLink>
                <NavLink to={'/category/EN -D'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>EN -D</NavLink>
                <NavLink to={'/category/mini wing'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mini wing</NavLink>
            </div>
            <div className="cartWdg">
                <CartWidget />
            </div>
    </nav>
    )
};

export default Navbar; 

