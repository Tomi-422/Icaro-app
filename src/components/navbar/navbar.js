import "./navbar.css";

const Navbar = () => {
    return (
        <nav style={{flexDirection: "row",  backgroundColor: "lightblue"}}>
            <div style={{display: "flex", justifyContent: "space-between",alignItems:"center"}}>
                <p>Tienda Icaro</p>
                <div style={{justifySelf: "center"}}>       
                    <button>Nosotros</button>
                    <button>Parapentes</button>
                    <button>Accesorios</button>
                </div>
            </div>
        </nav>
    )
};

export default Navbar; 

//style={{alignText:"center"}}