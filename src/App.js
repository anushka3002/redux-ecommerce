import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import { Switch, Routes,Route} from "react-router-dom"
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="products" element={<Products/>}></Route>
      <Route exact path="products/:id" element={<Product/>}></Route>
      <Route exact path="cart" element={<Product/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
