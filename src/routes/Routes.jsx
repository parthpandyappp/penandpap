import { Routes, Route } from "react-router-dom";

// Pages import
import Mockman from "mockman-js";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Wishlist from "../pages/Wishlist";
import ProductList from "../pages/ProductList";

function Endpoints() {
  return (
    <Routes>
      <Route path="/products" element={<ProductList />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mockman" element={<Mockman />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export { Endpoints as Routes };
