import "../styles/nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <h1 className="nav-header">
        <span>
          <img src="https://img.icons8.com/small/32/000000/sign-up.png" />
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
          />
          <li className="nor-menu inline-list">
            <button className="btn btn-primary nav-btn">
              <span>
                <img
                  className="nav-ico ico-basic"
                  src="https://img.icons8.com/ios/50/000000/login-rounded-right--v1.png"
                />
              </span>
              <Link to="/login">Login</Link>
            </button>
          </li>
          <li className="nor-menu inline-list">
            <p className="nav-btn">
              <span className="badge-ico">
                <img
                  className="nav-ico"
                  src="https://img.icons8.com/color/48/000000/like--v3.png"
                />
              </span>
              <Link to="/wishlist">Wishlist</Link>
            </p>
          </li>
          <li className="nor-menu inline-list">
            <p className="nav-btn">
              <span>
                <img
                  className="nav-ico"
                  src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/000000/external-cart-user-interface-icongeek26-glyph-icongeek26.png"
                />
              </span>
              <Link to="/cart">Cart</Link>
            </p>
          </li>
        </ul>
      </div>
    </nav>
  );
}
