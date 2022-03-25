import { useReducer } from "react";

// Importing components
import Filters from "../components/Filters";
import Product from "../components/Product";
import SearchBar from "../components/SearchBar";

// Importing product reducer function
import { productReducer } from "../reducers/productReducer";
import { useProductData } from "../custom hooks/ProductData";

// importing helper functions for soorting and filtering data
import {
  getFilteredByCategory,
  getFilteredByPrice,
  getFilteredByRatings,
  getSortedData,
} from "../helper-functions/sorters-filters";

export default function ProductList() {
  const productList = useProductData();

  const [state, dispatch] = useReducer(productReducer, {
    sortBy: null,
    underPrice: null,
    category: null,
    ratings: null,
  });

  const sortedData = getSortedData(productList, state.sortBy);
  let filteredData = getFilteredByPrice(sortedData, state.underPrice);
  filteredData = getFilteredByCategory(filteredData, state.category);
  filteredData = getFilteredByRatings(filteredData, state.ratings);

  return (
    <div className="prodList-container">
      <Filters dispatch={dispatch} />
      <div className="prod-main">
        <SearchBar />

        <div className="product-list">
          {filteredData &&
            filteredData.map(
              ({ _id, title, desc, price, coverImg, ratings }) => {
                return (
                  <Product
                    key={_id}
                    _id={_id}
                    title={title}
                    description={desc}
                    price={price}
                    coverImg={coverImg}
                    ratings={ratings}
                  />
                );
              }
            )}
        </div>
      </div>
    </div>
  );
}
