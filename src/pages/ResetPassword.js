import React from 'react';
import { Link } from 'react-router-dom';
;
export default function ResetPassword() {
    return (
      <div className="container">
        <h1 className="page-title"> Password Reset </h1>

        <form className="app-from">
          <div className="form-group">
            <label htmlFor="username">Username / Email ID</label>
            <input type="text" id="username" className="form-input" />
          </div>

          <div className="btn-container">
            <button className="btn-1" type="submit">
              Reset Password
            </button>
          </div>

          <div className="form-group">
            Create Account <Link to="/register"> Here</Link>
          </div>

          <div className="form-group">
            Login<Link to="/login"> Here</Link>
          </div>
        </form>
      </div>
    );
}
