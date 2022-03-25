import { Fragment } from "react";
import WishProduct from "../components/WishProduct";
import { useWishlist } from "../contexts/WishlistProvider";

export default function Wishlist() {
  const { Wishstate } = useWishlist();
  console.log(Wishstate);
  console.log("Wishstate: ", Wishstate.wishlist);

  return (
    <Fragment>
      {Wishstate.wishlist.length > 0 ? (
        <div class="center-hv">
          <div class="wishlist-title underline-wavy">
            <p>My Wishlist</p>
            <span>
              <img
                src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/000000/external-cart-user-interface-icongeek26-glyph-icongeek26.png"
                alt=""
              />
            </span>
          </div>

          <div class="container wishlist-container">
            {Wishstate.wishlist.map((product) => (
              <WishProduct product={product} key={product._id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="center-hv">
          <h2>You've made no wishes yet :(</h2>
          <img
            src="https://i.ibb.co/j8xDwP9/wishlist-empty.png"
            alt="wishlist-empty"
            className="empty-cart"
          />
        </div>
      )}
    </Fragment>
  );
}

// export { Wishlist };
