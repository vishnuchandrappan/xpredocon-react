import React from "react";
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="container">
      <h1 className="page-title"> Login </h1>

      <form className="app-from">
        <div className="form-group">
          <label htmlFor="username">Username / Email ID</label>
          <input type="text" id="username" className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="form-input" />
        </div>

        <div className="btn-container">
          <button className="btn-1" type="submit">
            Login
          </button>
        </div>

        <div className="form-group">
          Don't have an account ?<Link to="/register"> Create Account</Link>
        </div>

        <div className="form-group">
          Forgot Password ?<Link to="/resetPassword"> Reset here</Link>
        </div>
      </form>
    </div>
  );
}
