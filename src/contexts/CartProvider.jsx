import { useAuth } from "./AuthProvider";
import { cartReducer } from "../reducers/cartReducer";
import axios from "axios";

import {
  useContext,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const cartContext = createContext(null);
const encodedToken = localStorage.getItem("token");

function CartProvider({ children }) {
  const { user } = useAuth();

  const [state, dispatch] = useReducer(cartReducer, { cart: [] });
  const [boolSwitch, setBoolSwitch] = useState(false);

  const getCartData = async () => {
    const response = await axios({
      method: "GET",
      headers: {
        authorization: encodedToken, // passing token as an authorization header
      },
      url: "/api/user/cart",
    });
    dispatch({ type: "SET_CART_DATA", payload: response.data.cart });
  };

  useEffect(() => {
    if (user) {
      getCartData();
    }
  }, [boolSwitch, user]);

  const boolFunc = () => setBoolSwitch((prev) => !prev);

  return (
    <cartContext.Provider value={{ state, dispatch, boolFunc }}>
      {children}
    </cartContext.Provider>
  );
}

const useCart = () => useContext(cartContext);

export { useCart, CartProvider };
