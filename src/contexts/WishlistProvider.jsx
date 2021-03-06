import axios from "axios";
import { useAuth } from "./AuthProvider";
import { wishlistReducer } from "../reducers/wishlistReducer";

import {
  useContext,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const wishlistContext = createContext(null);

function WishlistProvider({ children }) {
  const { user } = useAuth();

  const [Wishstate, wishDispatch] = useReducer(wishlistReducer, {
    wishlist: [],
  });
  const [boolSwitch, setBoolSwitch] = useState(false);

  const getWishlistData = async () => {
    try {
      const encodedToken = localStorage.getItem("token");
      const response = await axios({
        method: "GET",
        headers: {
          authorization: encodedToken, // passing token as an authorization header
        },
        url: "/api/user/wishlist",
      });

      wishDispatch({ type: "SET_WISH_DATA", payload: response.data.wishlist });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      getWishlistData();
    }
  }, [boolSwitch, user]);

  const boolWishFunc = () => setBoolSwitch((prev) => !prev);

  return (
    <wishlistContext.Provider value={{ Wishstate, wishDispatch, boolWishFunc }}>
      {children}
    </wishlistContext.Provider>
  );
}

const useWishlist = () => useContext(wishlistContext);

export { useWishlist, WishlistProvider };
