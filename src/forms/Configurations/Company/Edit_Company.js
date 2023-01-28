import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../../components/Header/Header";
import { SideBar } from "../../../components/SideBar/SideBar";

export const Edit_Company = () => {
  return (
    <>
      <SideBar />
      <div className="content">
        <Header />
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-12">
              <div className="bg-secondary rounded h-100 p-4">
                <form action="" method="PUT" encType="multipart/form-data">
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <h3 className="fs-5">Company Information</h3>
                    </div>
                    <div className="col-md-6">
                      <Link
                        to="/company"
                        className="btn btn-success btn-sm bg-success px-3 py-2 fw-bold float-end"
                      >
                        <i className="fas fa-undo-alt me-2" />
                        Back To Company
                      </Link>
                      <button className="btn btn-warning bg-warning btn-sm float-end px-4 py-2 me-2 fw-bold">
                        <i className="fas fa-tools me-2" />
                        Update
                      </button>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value="name"
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          value="company.business@gmail.com"
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                          Telephone
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          value="096 999 9999"
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="facebook" className="form-label">
                          Facebook
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="facebook"
                          value="Company Facebook"
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="mb-3">
                        <label htmlFor="twiiter" className="form-label">
                          Twiiter
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="twiiter"
                          value="Company Twiiter"
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="telegram" className="form-label">
                          Telegram
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="telegram"
                          value="Company Telegram"
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                          Company Address
                        </label>
                        <textarea className="form-control company-address">
                          Company Address
                        </textarea>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="mb-5">
                        <label htmlFor="image" className="form-label">
                          Slide Image
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
