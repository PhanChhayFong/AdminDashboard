import React from "react";
import userProfile from "../../assets/img/user.jpg";
import userProfile1 from "../../assets/img/testimonial-1.jpg";
import userProfile2 from "../../assets/img/testimonial-2.jpg";
import { Link } from "react-router-dom";

export const User_Index = () => {
  return (
    <div className="container-fluid pt-4 px-4">
      <div className="row g-4">
        <div className="col-sm-12">
          <div className="bg-secondary rounded h-100 p-4">
            <div className="row">
              <div className="col-md-6">
                <h3 className="fs-5">User</h3>
              </div>
              <div className="col-md-6">
                <Link
                  to="/user/create_user"
                  className="btn btn-success btn-sm bg-success px-3 py-2 fw-bold float-end"
                >
                  <i className="fas fa-plus me-2" />
                  Add User
                </Link>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Type</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <img src={userProfile} width="45" />
                  </td>
                  <td>Sea Chan</td>
                  <td>sea.chan.react@gmail.com</td>
                  <td>012 999 9999</td>
                  <td>M</td>
                  <td>Admin</td>
                  <td>
                    <Link
                      to="/user/view_user/:id"
                      className="btn btn-success btn-sm me-2"
                      title="User Detail"
                    >
                      <i className="fas fa-eye" />
                    </Link>
                    <Link
                      to="/user/edit_user/:id"
                      className="btn btn-warning btn-sm me-2"
                      title="Edit User"
                    >
                      {" "}
                      <i className="fas fa-tools me-2"></i>Edit
                    </Link>
                    <a
                      href="#"
                      className="btn btn-danger btn-sm"
                      title="Delete User"
                    >
                      <i className="fas fa-trash-alt me-2"></i>Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>
                    <img src={userProfile1} width="45" />
                  </td>
                  <td>Ren Sophanarith</td>
                  <td>ren.sophanarith.react@gmail.com</td>
                  <td>096 999 9999</td>
                  <td>M</td>
                  <td>Admin</td>
                  <td>
                    <Link
                      to="/user/view_user/:id"
                      className="btn btn-success btn-sm me-2"
                      title="User Detail"
                    >
                      <i className="fas fa-eye" />
                    </Link>
                    <Link
                      to="/user/edit_user/:id"
                      className="btn btn-warning btn-sm me-2"
                      title="Edit User"
                    >
                      {" "}
                      <i className="fas fa-tools me-2"></i>Edit
                    </Link>
                    <a
                      href="#"
                      className="btn btn-danger btn-sm"
                      title="Delete User"
                    >
                      <i className="fas fa-trash-alt me-2"></i>Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>
                    <img src={userProfile2} width="45" />
                  </td>
                  <td>Phan ChayFong</td>
                  <td>phan.chayfong.react@gmail.com</td>
                  <td>085 999 9999</td>
                  <td>M</td>
                  <td>Admin</td>
                  <td>
                    <Link
                      to="/user/view_user/:id"
                      className="btn btn-success btn-sm me-2"
                      title="User Detail"
                    >
                      <i className="fas fa-eye" />
                    </Link>
                    <Link
                      to="/user/edit_user/:id"
                      className="btn btn-warning btn-sm me-2"
                      title="Edit User"
                    >
                      {" "}
                      <i className="fas fa-tools me-2"></i>Edit
                    </Link>
                    <a
                      href="#"
                      className="btn btn-danger btn-sm"
                      title="Delete User"
                    >
                      <i className="fas fa-trash-alt me-2"></i>Delete
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
