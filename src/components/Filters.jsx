export default function Filters({ dispatch }) {
  return (
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
  );
}
