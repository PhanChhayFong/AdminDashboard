import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../../components/Header/Header";
import { SideBar } from "../../../components/SideBar/SideBar";
import "./styles/user.css";
export const Create_User = () => {
  return (
    <>
      <SideBar />
      <div className="content">
        <Header />
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-12">
              <div className="bg-secondary rounded h-100 p-4">
                <form action="" method="POST" encType="multipart/form-data">
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <h3 className="fs-5">Create User</h3>
                    </div>
                    <div className="col-md-6">
                      <Link
                        to="/user"
                        className="btn btn-success btn-sm bg-success px-3 py-2 fw-bold float-end"
                      >
                        <i className="fas fa-undo-alt me-2" />
                        Back To User
                      </Link>
                      <button className="btn btn-primary btn-sm float-end px-4 py-2 me-2 fw-bold">
                        <i className="fas fa-share-square me-2" />
                        Save
                      </button>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-4">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="name"
                        />
                        <label htmlFor="name">Name</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="email"
                        />
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="password"
                        />
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className="form-control"
                          id="phone"
                          placeholder="phone"
                        />
                        <label htmlFor="phone" className="form-label">
                          Phone
                        </label>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="nationality"
                          placeholder="nationality"
                        />
                        <label htmlFor="nationality" className="form-label">
                          Nationality
                        </label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="date"
                          className="form-control"
                          id="date_of_birt"
                          placeholder="date_of_birt"
                        />
                        <label htmlFor="date_of_birt" className="form-label">
                          Date of Birth
                        </label>
                      </div>

                      <div className="form-floating mb-3">
                        <textarea
                          className="form-control company-address"
                          placeholder="address"
                        ></textarea>
                        <label htmlFor="address" className="form-label">
                          Address
                        </label>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="mb-3">
                        <label htmlFor="utype" className="form-label">
                          User Gender
                        </label>
                        <select
                          className="form-select form-select-lg mb-3 fs-6"
                          id="utype"
                          aria-label=".form-select-lg example"
                        >
                          <option selected>Select Gender</option>
                          <option value="1">M</option>
                          <option value="2">F</option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="utype" className="form-label">
                          User Type
                        </label>
                        <select
                          className="form-select form-select-lg mb-3 fs-6"
                          id="utype"
                          aria-label=".form-select-lg example"
                        >
                          <option selected>User Type</option>
                          <option value="1">Admin</option>
                          <option value="2">User</option>
                        </select>
                      </div>

                      <div className="mb-5">
                        <label htmlFor="image" className="form-label">
                          User Image
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="image"
                        />
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
