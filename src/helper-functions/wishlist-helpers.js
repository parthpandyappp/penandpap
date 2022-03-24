import axios from "axios";

const addToWishlist = async (productObj, boolWishFunc) => {

  try {

    // token required as an authorization header
    const encodedToken = localStorage.getItem("token")

    await axios({
      method: "POST",
      headers: {
        authorization: encodedToken,
      },
      url: "/api/user/wishlist",
      data: JSON.stringify({
        product: productObj,
      }),
    });

    boolWishFunc();
  } catch (error) {
    console.log(error);
  }
};

const deleteWishItem = async (id, dispatch, boolFunc) => {
  try {

    // token required as an authorization header
    const encodedToken = localStorage.getItem("token")

    const response = await axios({
      method: "DELETE",
      headers: {
        authorization: encodedToken,
      },
      url: `/api/user/wishlist/${id}`,
    });

    boolFunc();
    dispatch({ type: "SET_WISH_DATA", payload: response.data.wishlist });
  }
  catch (error) {
    console.log(error)
  }
};

const isWished = (wishArr, id) => {
  let res = false;
  for (let i = 0; i < wishArr.length; i++) {
    if (wishArr[i]._id === id) {
      res = true;
      break;
    }
  }

  return res;
};


export { addToWishlist, isWished, deleteWishItem };