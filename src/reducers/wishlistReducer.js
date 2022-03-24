const wishlistReducer = (state, action) => {
    switch (action.type) {
        case "SET_WISH_DATA":
            return { ...state, wishlist: action.payload };
        default:
            return state;
    }
};

export { wishlistReducer };