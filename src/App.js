import "./App.css";
import "./styles/prodlist.css";
import "./styles/wishlist.css";
import "./styles/cart.css"

import { Routes } from "./routes/Routes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
