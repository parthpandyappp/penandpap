import "../styles/login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="center-hv">
      <div className="auth-form">
        <form action="">
          <h2>Login</h2>
          <div className="inp-unit">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="johnsangram@gkool.com"
            />
          </div>
          <div className="inp-unit">
            <label for="email">Password</label>
            <input type="email" name="email" placeholder="**********" />
          </div>

          <div className="inp-unit">
            <button className="btn btn-primary login-btn">Login</button>
            <div className="text-center">
              <input type="checkbox" id="rem-me" name="rem-me" />
              <label for="rem-me">Remember me</label>
            </div>
          </div>
          <p>
            Don't have an account?
            <span>
              <Link to="/signup" className="underline">
                {" "}
                Sign up?
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

// export { Login };
