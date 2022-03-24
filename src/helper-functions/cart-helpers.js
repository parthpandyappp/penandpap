import axios from "axios";

// token required as an authorization header
const encodedToken = localStorage.getItem("token")


// A helper function to Add items in Cart
const addToCart = async (productObj, boolFunc) => {

  try {
    await axios({
      method: "POST",
      headers: {
        authorization: encodedToken,
      },
      url: "/api/user/cart",
      data: JSON.stringify({
        product: productObj,
      }),
    });

    boolFunc();
  } catch (error) {
    console.log(error);
  }
};

// A helper function to delete items from cart
const deleteCartItem = async (id, dispatch, boolFunc) => {

  const response = await axios({
    method: "DELETE",
    headers: {
      authorization: encodedToken,
    },
    url: `/api/user/cart/${id}`,
  });

  boolFunc();
  dispatch({ type: "SET_CART_DATA", payload: response.data.cart });
};

// A helper function to increment cart item's quantity
const incrementCartItem = async (id, dispatch, boolFunc) => {

  const response = await axios({
    method: "POST",
    headers: {
      authorization: encodedToken,
    },
    data: {
      action: {
        type: "increment",
      },
    },
    url: `/api/user/cart/${id}`,
  });

  boolFunc();
  dispatch({ type: "SET_CART_DATA", payload: response.data.cart });
};

// A helper function to decrement cart item's quantity
const decrementCartItem = async (id, dispatch, boolFunc) => {

  const response = await axios({
    method: "POST",
    headers: {
      authorization: encodedToken,
    },
    data: {
      action: {
        type: "decrement",
      },
    },
    url: `/api/user/cart/${id}`,
  });

  boolFunc();
  dispatch({ type: "SET_CART_DATA", payload: response.data.cart });
};

// A helper function to check if item is already carted or not
const isCarted = (cartArr, id) => {
  let res = false;
  for (let i = 0; i < cartArr.length; i++) {
    if (cartArr[i]._id === id) {
      res = true;
      break;
    }
  }

  return res;
};

export { deleteCartItem, decrementCartItem, incrementCartItem, addToCart, isCarted }