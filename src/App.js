import React from "react";

const App = () => {
  return (
    <div className="container">
      <form>
        <h1 className="">Sign up!!</h1>
        <div className="form_input_container">
          <label htmlFor="first_name">First Name</label>
          <input
            className="form_input"
            id="first_name"
            type="text"
            placeholder="Enter your first name"
          />
        </div>
        <div className="form_input_container">
          <label htmlFor="first_name">Last Name</label>
          <input
            className="form_input"
            id="last_name"
            type="text"
            placeholder="Enter your last name"
          />
        </div>
        <div className="form_input_container">
          <label htmlFor="first_name">Email Address</label>
          <input
            className="form_input"
            id="email"
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div className="form_btn_container">
          <button className="btn" type="submit">
            Sign In
          </button>
        </div>
      </form>
      <p>&copy;2020 All rights reserved.</p>
    </div>
  );
};

export default App;