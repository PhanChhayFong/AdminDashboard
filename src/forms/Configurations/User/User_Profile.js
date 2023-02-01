import React from "react";
import { Link } from "react-router-dom";
import User1 from "../../assets/img/user.jpg";

export const User_Profile = () => {
  return (
    <>
      <div className="content open">
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-12">
              <div className="bg-secondary rounded h-100 p-4">
                <form>
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <h3 className="fs-5">My Profile</h3>
                    </div>
                    <div className="col-md-6">
                      <Link
                        to="/profile/edit_profile"
                        className="btn btn-success btn-sm bg-success px-3 py-2 fw-bold float-end"
                      >
                        <i className="fas fa-tools me-2" />
                        Edit Profile
                      </Link>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-3">
                      <div className="form-floating mb-3 d-flex justify-content-center align-item-center rounded-circle">
                        <img
                          src={User1}
                          className="rounded-circle border border-5 border-danger"
                          width="250"
                        />
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          value="Ren Sophanarith"
                          placeholder="name"
                          disabled
                        />
                        <label className="form-label">Name</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          value="ren.sophanarith@gmail.com"
                          placeholder="email"
                          disabled
                        />
                        <label className="form-label">Email</label>
                      </div>
                    </div>

                    <div className="col-md-9">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          value="096 999 9999"
                          placeholder="phone"
                          disabled
                        />
                        <label className="form-label">Phone</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          value="10-Jan-2000"
                          placeholder="date_of_birt"
                          disabled
                        />
                        <label className="form-label">Date Of Birth</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          value="Admin"
                          placeholder="Role"
                          disabled
                        />
                        <label className="form-label">Role</label>
                      </div>

                      <hr className="border border-5 border-danger" />

                      <div className="form-floating mb-3">
                        <textarea
                          className="form-control company-address"
                          placeholder="address"
                          disabled
                          value="H2400, St2400, Sangkat Sensok II, Khan Sensok, Phnom Penh, Cambodia"
                        ></textarea>
                        <label className="form-label">Address</label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
