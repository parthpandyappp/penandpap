const getSortedData = (data, sortBy) => {
    if (sortBy === "HIGH_TO_LOW") {
        return [...data].sort((a, b) => b.price - a.price);
    } else if (sortBy === "LOW_TO_HIGH") {
        return [...data].sort((a, b) => a.price - b.price);
    } else {
        return data;
    }
};

const getFilteredByPrice = (data, underPrice) => {
    if (underPrice === "UNDER_500") {
        return [...data].filter((item) => item.price < 500);
    } else if (underPrice === "UNDER_600") {
        return [...data].filter((item) => item.price < 600);
    } else if (underPrice === "UNDER_700") {
        return [...data].filter((item) => item.price < 700);
    } else if (underPrice === "UNDER_1000") {
        return [...data].filter((item) => item.price < 1000);
    } else {
        return data;
    }
};

const getFilteredByCategory = (data, category) => {
    if (category === "student") {
        return [...data].filter((item) => item.category.includes("student"));
    } else if (category === "office") {
        return [...data].filter((item) => item.category.includes("office"));
    } else {
        return data;
    }
};

const getFilteredByRatings = (data, ratings) => {
    if (ratings === "4_&_ABOVE") {
        return [...data].filter((item) => item.ratings >= 4);
    } else if (ratings === "3_&_ABOVE") {
        return [...data].filter((item) => item.ratings >= 3);
    } else if (ratings === "2_&_ABOVE") {
        return [...data].filter((item) => item.ratings >= 2);
    } else if (ratings === "1_&_ABOVE") {
        return [...data].filter((item) => item.ratings >= 1);
    } else {
        return data;
    }
};

export { getFilteredByCategory, getFilteredByPrice, getFilteredByRatings, getSortedData };