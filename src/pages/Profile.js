import React from "react";

export default function Profile() {
  return (
    <div className="container-full">
      <div className="user-card">
        <img src="" alt="" className="" />
        <div className="user-details">
          <h3 className="user-name">John Doe</h3>
          <h3 className="user-age">31</h3>
        </div>
      </div>
      <div className="user-summary">
        <h3>User Summary</h3>
        <div className="summary-card">
          <div className="summary-card-date">12 Dec 2019</div>
          <div className="summary-card-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            molestiae voluptates illum aspernatur illo modi aperiam neque,
            dolorum doloribus, quisquam temporibus, quo eveniet recusandae
            cupiditate! Laudantium quis delectus sequi vero.
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-card-date">10 Oct 2019</div>
          <div className="summary-card-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            molestiae voluptates illum aspernatur illo modi aperiam neque,
            dolorum doloribus, quisquam temporibus, quo eveniet recusandae
            cupiditate! Laudantium quis delectus sequi vero.
          </div>
        </div>
      </div>
      <div className="user-options">
        <h3 className="user-options">Change Password</h3>
        <form className="password-change">
          <div className="form-group">
            <label htmlFor="current_password">Current Password</label>
            <input
              type="password"
              id="current_password"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input type="password" id="password" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="password_confirmation">Retype New Password</label>
            <input
              type="password"
              id="password_confirmation"
              className="form-input"
            />
          </div>
          <div className="btn-container">
            <button type="submit" className="btn-1">
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
