import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./contexts/AuthProvider";
import { CartProvider } from "./contexts/CartProvider";
import { WishlistProvider } from "./contexts/WishlistProvider";
import { BrowserRouter as Router } from 'react-router-dom';
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
