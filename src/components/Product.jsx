import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../contexts/AuthProvider";
import { useCart } from "../contexts/CartProvider";
import { notify } from "../helper-functions/toast-helpers";
import { addToCart, isCarted } from "../helper-functions/cart-helpers";

export default function Product({
  _id,
  title,
  description,
  price,
  coverImg,
  ratings,
}) {
  const { user } = useAuth();
  const { state, boolFunc } = useCart();

  return (
    <div className="wishlist-product prodMain-size">
      <Toaster position="bottom-right" reverseOrder={false} />
      <img className="wishlist-img" src={coverImg.link} alt={coverImg.alt} />
      <div className="wishlistProduct-details">
        <h3>{title}</h3>
        <p className="product-description">{description}</p>
        <div className="product-card-heart">
          <h3>₹ {price}</h3>

          <h2>
            <img
              className="wishlist-love"
              src="https://img.icons8.com/plasticine/100/000000/filled-like.png"
              alt="like-button"
            />
          </h2>
        </div>
        {/* <h4>Ratings: {ratings}/5</h4> */}
        {!user ? (
          <button className="btn btn-primary btn-block">
            <Link to="/login">Move to Cart</Link>
          </button>
        ) : (
          <div>
            {state.cart.length > 0 ? (
              <div>
                {isCarted(state.cart, _id) ? (
                  <button className="btn btn-primary btn-block">
                    <Link to="/cart">Go to Cart</Link>
                  </button>
                ) : (
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() =>
                      addToCart(
                        { _id, title, description, price, coverImg, ratings },
                        boolFunc,
                        notify
                      )
                    }
                  >
                    Move to Cart
                  </button>
                )}
              </div>
            ) : (
              <button
                className="btn btn-primary btn-block"
                onClick={() =>
                  addToCart(
                    { _id, title, description, price, coverImg, ratings },
                    boolFunc,
                    notify
                  )
                }
              >
                Move to Cart
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
