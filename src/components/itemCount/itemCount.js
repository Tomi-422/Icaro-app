import {useState} from 'react'

const Counter = ({onAdd}) => {
    const [count, setCount] = useState (1) 

    const decrement = () =>{
        if (count > 0) {
            setCount (count -1);
        }
    }

    const increment = () => {
        setCount (count +1);
    }

    return (
        <div>
            <h2>Producto 1</h2>
            <h3>{count}</h3>
            <button onClick={decrement}>Restar</button>
            <button onClick={increment}>Sumar</button>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default Counter; 