import Navbar from "../components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Shop from "../pages/shop";
import ShopCategories from "../pages/shopCategories";
import Product from "../pages/product";
import Cart from "../pages/Cart";
import LoginSignup from "../pages/LoginSignup";
import Footer from "../components/footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategories category="men" />} />
        <Route path="/women" element={<ShopCategories category="women" />} />
        <Route path="/kids" element={<ShopCategories category="kids" />} />
        <Route path="/product" element={<Product />} />
        <Route path=":productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
