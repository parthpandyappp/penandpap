const cartReducer = (state, action) => {
    switch (action.type) {
        case "SET_CART_DATA":
            return { ...state, cart: action.payload };
        default:
            return state;
    }
};

export { cartReducer };