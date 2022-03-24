import { useWishlist } from "../contexts/WishlistProvider";
import { deleteWishItem } from "../helper-functions/wishlist-helpers";
import { useCart } from "../contexts/CartProvider";
import { Link } from "react-router-dom";
import { addToCart, isCarted } from "../helper-functions/cart-helpers";

function WishProduct({ product }) {
  const { wishDispatch, boolWishFunc } = useWishlist();
  const { _id, title, description, price, coverImg, ratings } = product;
  const { state, boolFunc } = useCart();

  return (
    <div class="wishlist-product">
      <img class="wishlist-img" src={coverImg.link} alt={coverImg.alt} />
      <div class="wishlistProduct-details">
        <h3>{title}</h3>
        <p class="product-description">{description}</p>
        <div class="product-card-heart">
          <h3>₹ {price}</h3>
          <h2>
            <img
              class="wishlist-love"
              src="https://img.icons8.com/plasticine/100/000000/filled-like.png"
              alt=""
              onClick={() => deleteWishItem(_id, wishDispatch, boolWishFunc)}
            />
          </h2>
        </div>
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
                    boolFunc
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
                boolFunc
              )
            }
          >
            Move to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default WishProduct;
