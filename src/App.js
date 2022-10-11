//npm import './App.css';
import Navbar from './components/navbar/navbar'; 
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemCount from './components/itemCount/itemCount'

function App() {

  const handleOnAdd = () => {
    console.log ('Se hizo click en agrregar al carrito')
  }

  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido a la tienda Icaro!"} /> 
      <ItemCount onAdd={handleOnAdd} />
    </div>
  );
}

export default App;
