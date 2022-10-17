import Navbar from './components/navbar/navbar'; 
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

