import { Link } from "react-router-dom";
import { React, useRef, useState, useEffect } from "react";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

export const Register_Form = () => {
  return (
    <div className="container-fluid position-relative d-flex p-0">
      {/* Sign Up Start */}
      <div className="container-fluid">
        <div
          className="row h-100 align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <div className="bg-secondary rounded p-5 p-sm-5 my-4 mx-1">
              <div className="text-center">
                <a href="#">
                  <h3 className="text-primary">
                    <i className="fa fa-user-edit me-2" />
                    Furniture Store
                  </h3>
                </a>
              </div>
              <div className="text-center">
                <h3>Sign In</h3>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingText"
                  placeholder="jhondoe"
                />
                <label htmlFor="floatingText">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-4">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-floating mb-4">
                <input
                  type="password"
                  className="form-control"
                  id="floatingConfirmPassword"
                  placeholder="Confirm Password"
                />
                <label htmlFor="floatingPassword">Confirm Password</label>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <a href>Forgot Password</a>
              </div>
              <button type="submit" className="btn btn-primary py-3 w-100 mb-4">
                Sign Up
              </button>
              <p className="text-center mb-0">
                Already have an Account? <Link to="/">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Sign Up End */}
    </div>
  );
};
