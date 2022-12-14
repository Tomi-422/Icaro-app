import "./App.css"
import Navbar from './components/navbar/navbar'; 
import Footer from "./components/footer/footer";
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/cartContext'
import  Cart  from './components/cart/cart'
import CheckOut from './components/checkout/checkout';

function App() {

  return (
    <div className='App'>
      <CartProvider>
        <BrowserRouter>  
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>  
    </div>
  );
} 

export default App;

