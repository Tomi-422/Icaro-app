//npm import './App.css';
import Navbar from './components/navbar/navbar'; 
import ItemListContainer from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"Bienvenido a la tienda Icaro!"} /> 
      
    </div>
  );
}

export default App;
