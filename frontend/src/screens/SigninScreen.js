import React from "react";
import { Link } from "react-router-dom";
export default function SigninScreen() {
  return (
    <div>
      <form className="form">
        <div>
          <h1>Sign In Gazwah Shopify</h1>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter Email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter Password" />
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New customer? <Link to="/register">Create your Account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
