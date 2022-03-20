const productReducer = (state, action) => {
    switch (action.type) {
        case "SORT":
            return { ...state, sortBy: action.payload };
        case "CLEAR":
            return {
                ...state,
                sortBy: action.payload,
                underPrice: action.payload,
                category: action.payload,
                ratings: action.payload,
            };
        case "FILTER_BY_PRICE":
            return { ...state, underPrice: action.payload };
        case "FILTER_BY_CATEGORY":
            return { ...state, category: action.payload };
        case "FILTER_BY_RATINGS":
            return { ...state, ratings: action.payload };
        default:
            return state;
    }
};

export { productReducer }