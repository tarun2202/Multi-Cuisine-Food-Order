import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Login() {
  return (
    <div>
      <div className="container pt-3 pb-5 px-5 border border-2 rounded border-dark bg-light mt-5">
        <p className="mb-3 text-center display-5">Login</p>
        <div className="form-floating border border-dark rounded">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter email"
          />
          <label for="email">Email</label>
        </div>
        <div className="form-floating mt-5 border border-dark rounded">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter email"
          />
          <label for="password">Password</label>
        </div>
        <div className="text-center d-grid">
         <Link to="/dashboard"><button className="btn btn-dark btn-lg mt-5 btn-block">Submit</button></Link> 
        </div>
        <p className="h5 mt-3">
          Not Registered? <a href="/userReg">Register here!</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
