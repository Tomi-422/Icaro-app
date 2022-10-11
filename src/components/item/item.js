const Item = ({nombre, stock, precio }) => {

    return(
        <div>
            <h2>{nombre}</h2>
            <h3>stock: {stock}</h3>
            <p>precio: {precio}</p>
        </div>
    )
}

export default Item