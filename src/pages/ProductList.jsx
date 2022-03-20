import "../styles/prodlist.css";
import "../styles/wishlist.css";

import Product from "../components/Product";
import { useEffect, useState, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";
import {
  getFilteredByCategory,
  getFilteredByPrice,
  getFilteredByRatings,
  getSortedData,
} from "../helper-functions/sorters-filters";
import axios from "axios";

export default function ProductList() {
  const [productList, setProductList] = useState([]);

  const [state, dispatch] = useReducer(productReducer, {
    sortBy: null,
    underPrice: null,
    category: null,
    ratings: null,
  });

  const fetchData = async () => {
    const getRequest = await axios.get("/api/products");
    setProductList(getRequest.data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sortedData = getSortedData(productList, state.sortBy);
  let filteredData = getFilteredByPrice(sortedData, state.underPrice);
  filteredData = getFilteredByCategory(filteredData, state.category);
  filteredData = getFilteredByRatings(filteredData, state.ratings);

  return (
    <div class="prodList-container">
      <div class="side-nav">
        <div class="filters">
          <div class="filter-head">
            <h2>Filters</h2>
            <button
              class="btn btn-primary"
              onClick={() => dispatch({ type: "CLEAR", payload: null })}
            >
              Clear
            </button>
          </div>

          <div class="filter-section">
            <h4>Price</h4>
            <p>
              <input
                type="radio"
                name="price"
                onChange={() =>
                  dispatch({ type: "FILTER_BY_PRICE", payload: "UNDER_500" })
                }
              />{" "}
              Under ₹500
            </p>
            <p>
              <input
                type="radio"
                name="price"
                onChange={() =>
                  dispatch({ type: "FILTER_BY_PRICE", payload: "UNDER_600" })
                }
              />{" "}
              Under ₹600
            </p>
            <p>
              <input
                type="radio"
                name="price"
                onChange={() =>
                  dispatch({ type: "FILTER_BY_PRICE", payload: "UNDER_700" })
                }
              />{" "}
              Under ₹700
            </p>
            <p>
              <input
                type="radio"
                name="price"
                onChange={() =>
                  dispatch({ type: "FILTER_BY_PRICE", payload: "UNDER_1000" })
                }
              />{" "}
              Over ₹1000
            </p>
          </div>

          <div class="filter-section">
            <h4>Category</h4>
            <p>
              <input
                type="radio"
                name="category"
                onChange={() =>
                  dispatch({ type: "FILTER_BY_CATEGORY", payload: "student" })
                }
              />{" "}
              Student Stationery
            </p>
            <p>
              <input
                type="radio"
                name="category"
                onChange={() =>
                  dispatch({ type: "FILTER_BY_CATEGORY", payload: "office" })
                }
              />{" "}
              Office Stationery
            </p>
          </div>

          <div class="filter-section">
            <h4>Ratings</h4>
            <p>
              <input
                type="radio"
                name="ratings"
                onChange={() =>
                  dispatch({ type: "FILTER_BY_RATINGS", payload: "4_&_ABOVE" })
                }
              />{" "}
              4 Stars & above
            </p>
            <p>
              <input
                type="radio"
                name="ratings"
                onChange={() =>
                  dispatch({ type: "FILTER_BY_RATINGS", payload: "3_&_ABOVE" })
                }
              />{" "}
              3 Stars & above
            </p>
            <p>
              <input
                type="radio"
                name="ratings"
                onChange={() =>
                  dispatch({ type: "FILTER_BY_RATINGS", payload: "2_&_ABOVE" })
                }
              />{" "}
              2 Stars & above
            </p>
            <p>
              <input
                type="radio"
                name="ratings"
                onChange={() =>
                  dispatch({ type: "FILTER_BY_RATINGS", payload: "1_&_ABOVE" })
                }
              />{" "}
              1 Stars & above
            </p>
          </div>

          <div class="filter-section">
            <h4>Sort by</h4>
            <p>
              <input
                type="radio"
                name="SORT_BY"
                onChange={() =>
                  dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
                }
              />{" "}
              High to Low
            </p>
            <p>
              <input
                type="radio"
                name="SORT_BY"
                onChange={() =>
                  dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
                }
              />{" "}
              Low to High
            </p>
          </div>
        </div>
      </div>

      <div class="prod-main">
        <div class="search-center">
          <div class="search-block">
            <input class="search-bar" type="search" name="" id="" />
            <button class="btn btn-primary">Search</button>
          </div>
        </div>

        <div class="product-list">
          {filteredData &&
            filteredData.map(
              ({ id, title, desc, price, coverImg, ratings }) => {
                return (
                  <Product
                    key={id}
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

// export { ProductList };
