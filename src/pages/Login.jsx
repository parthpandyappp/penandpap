import axios from "axios";
import { useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("gkool@neog.camp");
  const [pass, setPass] = useState("gkool");
  const { boolFunc } = useAuth();
  const navigate = useNavigate();

  console.log(email, pass);
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: "gkool@neog.camp",
        password: "gkool",
      });
      boolFunc((prev) => !prev);
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("userData", JSON.stringify(response.data.foundUser));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="center-hv">
      <div className="auth-form">
        <form onSubmit={(e) => loginHandler(e)}>
          <h2>Login</h2>
          <div className="inp-unit">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              value="johnsangram@gkool.com"
              placeholder="johnsangram@gkool.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inp-unit">
            <label for="email">Password</label>
            <input
              type="password"
              name="password"
              value="thisismyloginimplementation"
              placeholder="**********"
              onChange={(e) => setPass(e.target.value)}
            />
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
