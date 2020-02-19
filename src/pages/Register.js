import React from "react";
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="container">
      <h1 className="page-title"> Register </h1>

      <form className="app-from">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email ID</label>
          <input type="text" id="email" className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <input
            type="password"
            id="password_confirmation"
            className="form-input"
          />
        </div>

        <div className="btn-container">
          <button className="btn-1" type="submit">
            Register
          </button>
        </div>

        <div className="form-group">
          Already have an account ? <Link to="login"> Login here</Link>
        </div>
      </form>
    </div>
  );
}
