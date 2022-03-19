import { Routes, Route } from "react-router-dom";

// Pages import
import Home from "../pages/Home";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import ProductList from "../pages/ProductList";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

// import { Wishlist, Cart, ProductList, Signup, Login } from "../pages/";

function Endpoints() {
  return (
    <Routes>
      <Route path="/products" element={<ProductList />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export { Endpoints as Routes };
