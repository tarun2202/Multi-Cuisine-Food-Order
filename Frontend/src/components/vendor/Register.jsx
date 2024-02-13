import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <div class="container pt-3 pb-5 px-5 border border-2 rounded border-dark bg-light mt-5">
        <p class="mb-3 text-center display-5">Register</p>
        <div class="form-floating border border-dark rounded">
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            placeholder="Enter email"
          />
          <label for="email">Email</label>
        </div>
        <div class="form-floating mt-5 border border-dark rounded">
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            placeholder="Enter email"
          />
          <label for="password">Password</label>
        </div>
        <div class="text-center d-grid">
      <Link to="/vendorlogin"><button class="btn btn-dark btn-lg mt-5 btn-block">Submit</button></Link>  
        </div>
        <p class="h5 mt-3">
          Already Registered? <a href="/vendorLogin">Login here!</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
