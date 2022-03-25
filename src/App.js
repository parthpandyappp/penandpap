import { Routes } from "./routes/Routes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// All the stylesheet imports
import "./App.css";
import "./styles/nav.css";
import "./styles/cart.css"
import "./styles/login.css";
import "./styles/footer.css";
import "./styles/prodlist.css";
import "./styles/wishlist.css";


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
