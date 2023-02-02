import { Link, Navigate } from "react-router-dom";
import { React, useRef, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
window.Swal = Swal;

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

export const Register_Form = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => setPasswordShown(!passwordShown);
  const [repasswordShown, setRePasswordShown] = useState(false);
  const toggleRePassword = () => setRePasswordShown(!repasswordShown);
  const alartPasswordError = (fill) => {
    Swal.fire({
      icon: "error",
      title: `Error !!!`,
      text: `Please Enter ${fill? "Confirm Password Again":"Username, Email, Password"} !!!`,
    });
  };
  const [matchPass, setMatchPass] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [navigate, setNavigate] = useState(false);
  if (navigate) {
    return <Navigate to="/" />;
  }
  const submit = () => {
    if (user.name != "" && user.email != "" && user.password != "") {
      if (user.password == matchPass) {
        axios.post(`http://localhost:5000/api/v1/users/register`, user, {
          headers: { "Content-Type": "application/json" },
        });
        setNavigate(true);
      } else alartPasswordError(true)
    }else alartPasswordError(false)
  };
  return (
    <div className="container-fluid position-relative d-flex p-0">
      {/* Sign Up Start */}
      <div className="container-fluid">
        <div
          className="row h-100 align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <div className="bg-secondary rounded p-5 p-sm-5 my-4">
              <div className="text-center">
                <a href="#">
                  <h3 className="text-primary">
                    <i className="fa fa-user-edit me-2" />
                    Furniture Store
                  </h3>
                </a>
              </div>
              <div className="text-center">
                <h3>Sign Up</h3>
              </div>
              <form onSubmit={submit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingText"
                    placeholder="jhondoe"
                    value={user.name}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        name: e.target.value,
                      });
                    }}
                  />
                  <label htmlFor="floatingText">Username</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={user.email}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        email: e.target.value,
                      });
                    }}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type={passwordShown ? "text" : "password"}
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        password: e.target.value,
                      });
                    }}
                  />
                  <i
                    className={`fa ${
                      passwordShown ? "fa-eye-slash" : "fa-eye"
                    } floatingPassword`}
                    style={{
                      cursor: "pointer",
                      position: "absolute",
                      top: 25,
                      right: 20,
                    }}
                    onClick={togglePassword}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type={repasswordShown ? "text" : "password"}
                    className="form-control"
                    id="floatingConfirmPassword"
                    placeholder="Confirm Password"
                    value={matchPass}
                    onChange={(e) => {
                      setMatchPass(e.target.value);
                    }}
                  />
                  <i
                    className={`fa ${
                      repasswordShown ? "fa-eye-slash" : "fa-eye"
                    } floatingPassword`}
                    style={{
                      cursor: "pointer",
                      position: "absolute",
                      top: 25,
                      right: 20,
                    }}
                    onClick={toggleRePassword}
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
                </div>
                <a
                  // type="submit"
                  onClick={() => {
                    submit();
                  }}
                  className="btn btn-primary py-3 w-100 mb-4"
                >
                  Sign Up
                </a>
              </form>
              <p className="text-center m-0">
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
