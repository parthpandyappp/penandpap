import "../styles/nav.css";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { useCart } from "../contexts/CartProvider";

export default function Nav() {
  const { user } = useAuth();
  const { state } = useCart();

  return (
    <nav>
      <h1 className="nav-header">
        <span>
          <img
            src="https://img.icons8.com/small/32/000000/sign-up.png"
            alt=""
          />
        </span>

        <Link to="/" className="underline-wavy">
          pen&pap
        </Link>
      </h1>

      <div>
        <ul className="nav-pills">
          <img
            className="ham-menu"
            src="https://img.icons8.com/small/32/000000/menu.png"
            alt=""
          />

          <li className="nor-menu inline-list">
            {user ? (
              <h4>Hello, {user.firstName} 👋</h4>
            ) : (
              <button className="btn btn-primary nav-btn">
                <span>
                  <img
                    className="nav-ico ico-basic"
                    src="https://img.icons8.com/ios/50/000000/login-rounded-right--v1.png"
                    alt=""
                  />
                </span>
                <Link to="/login">Login</Link>
              </button>
            )}
          </li>
          <li className="nor-menu inline-list">
            <p className="nav-btn">
              <span className="badge-ico">
                <img
                  className="nav-ico"
                  src="https://img.icons8.com/color/48/000000/like--v3.png"
                  alt=""
                />
              </span>
              {!user ? (
                <Link to="/login">Wishlist</Link>
              ) : (
                <Link to="/wishlist" className="cartBadge-container">
                  Wishlist
                  <span className="cart-badge">0</span>
                </Link>
              )}
            </p>
          </li>
          <li className="nor-menu inline-list">
            <p className="nav-btn">
              <span>
                <img
                  className="nav-ico"
                  src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/000000/external-cart-user-interface-icongeek26-glyph-icongeek26.png"
                  alt=""
                />
              </span>
              {!user ? (
                <Link to="/login">Cart</Link>
              ) : (
                <Link to="/cart" className="cartBadge-container">
                  Cart<span className="cart-badge">{state.cart.length}</span>
                </Link>
              )}
            </p>
          </li>
        </ul>
      </div>
    </nav>
  );
}
