import { Fragment } from "react";
import { useCart } from "../contexts/CartProvider";
import {
  decrementCartItem,
  deleteCartItem,
  incrementCartItem,
} from "../helper-functions/cart-helpers";

export default function Cart() {
  const { state, dispatch, boolFunc } = useCart();

  return (
    <Fragment>
      {state.cart.length > 0 ? (
        <div className="center-hv">
          <div className="cart-title underline-wavy">
            <p>My Cart</p>
            <span>
              <img
                src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/000000/external-cart-user-interface-icongeek26-glyph-icongeek26.png"
                alt="cart-bag"
              />
            </span>
          </div>
          <div className="container">
            <div className="cart-container">
              <div className="cart-products">
                {state.cart.map(
                  ({
                    _id,
                    title,
                    description,
                    price,
                    coverImg,
                    ratings,
                    qty,
                  }) => {
                    return (
                      <div className="cart-product" key={_id}>
                        <img
                          className="cart-img"
                          src={coverImg.link}
                          alt={coverImg.alt}
                        />
                        <div className="cartProduct-details">
                          <h3>{title}</h3>
                          <p className="product-description">{description}</p>
                          <div className="product-card-heart">
                            <h3>₹ {price}</h3>
                            <h2>
                              <img
                                className="product-bin"
                                src="https://img.icons8.com/ios/50/000000/delete.png"
                                alt="delete-bin"
                                onClick={() =>
                                  deleteCartItem(_id, dispatch, boolFunc)
                                }
                              />
                            </h2>
                          </div>
                          <div className="product-quantity">
                            <button
                              onClick={() =>
                                decrementCartItem(_id, dispatch, boolFunc)
                              }
                            >
                              -
                            </button>
                            <input value={qty} disabled />
                            <button
                              onClick={() =>
                                incrementCartItem(_id, dispatch, boolFunc)
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
              <div className="cart-priceCard">
                <h2>Price Details</h2>
                <hr />
                <div className="cart-primaryDetails">
                  <div className="details-main">
                    {state.cart.map((product) => {
                      return (
                        <div className="primary-unit" key={product._id}>
                          <p>
                            {product.title}, {product.qty} (
                            {product.price * product.qty})
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <hr />
                <div className="cart-primaryDetails">
                  <div className="primary-unit">
                    <p>Total Amount</p>

                    <p>
                      ₹
                      {state.cart.reduce((prev, curr) => {
                        return prev + curr.price * curr.qty;
                      }, 0)}
                    </p>
                  </div>
                </div>
                <hr />
                <button className="btn btn-primary btn-block">
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="center-hv">
          <h2>Your cart seems to be empty :(</h2>
          <img
            src="https://i.ibb.co/ZJvzfLF/empty-cart.png"
            alt="empty-cart"
            className="empty-cart"
          ></img>
        </div>
      )}
    </Fragment>
  );
}
