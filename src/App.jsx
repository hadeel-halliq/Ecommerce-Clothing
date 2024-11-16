import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from "./Pages/Product";
import Cart from './Pages/Cart'
import LoginSignUp from './Pages/LoginSignUp'
import Footer from "./Components/Footer/Footer";
import banner_kids from './Components/Assets/banner_kids.png';
import banner_men from './Components/Assets/banner_men.png';
import banner_women from './Components/Assets/banner_women.png'

function App() {
  return ( 
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/men" element={<ShopCategory banner={banner_men} category='men'/>}/>
          <Route path="/ecommerce-clothing" element={<ShopCategory banner={banner_men} category='men'/>}/>
          <Route path="/women" element={<ShopCategory banner={banner_women} category='women'/>}/>
          <Route path="/ecommerce-clothing" element={<ShopCategory banner={banner_women} category='women'/>}/>
          <Route path="/kids" element={<ShopCategory banner={banner_kids} category='kid'/>}/>
          <Route path="/ecommerce-clothing" element={<ShopCategory banner={banner_kids} category='kid'/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/ecommerce-clothing" element={<Product/>}/>
          <Route path="/product/:productId" element={<Product/>}/>
          <Route path="/ecommerce-clothing" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/ecommerce-clothing" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignUp />}/>
          <Route path="/ecommerce-clothing" element={<LoginSignUp />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
