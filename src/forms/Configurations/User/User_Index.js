import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiController from "../../../service/Controller";
import Pagination from "../../../components/Pagination";
import Alart from "../../../service/Alart";

export const User_Index = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [reRender, setReRender] = useState(false);
  //about pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(5);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const changeUserPP = (e) => setitemsPerPage(e);
  const tb = "users";

  useEffect(() => {
    if (!ApiController.ProtectedRoute()) navigate("/");
    ApiController.getAll(tb).then((res) => setUsers(res.data));
    setReRender(false);
  }, [reRender]);

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
            <table className="table text-center text-md-start">
              <thead>
                <tr>
                  <th>Nº</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th className="d-none d-md-table-cell">Email</th>
                  <th>Phone</th>
                  <th className="d-none d-md-table-cell">Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((user, i) => (
                  <tr key={i}>
                    <td scope="row">{i + 1 + indexOfFirstItem}</td>
                    <td>
                      <div
                        className="position-relative rounded-circle"
                        style={{
                          width: 40,
                          height: 40,
                          backgroundImage: `url(${user.image})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "100%",
                          backgroundPosition: "center",
                          backgroundColor: "#0775d4",
                        }}
                      >
                        <div
                          className={`${
                            user.active ? "bg-success" : "bg-danger"
                          } rounded-circle border border-2 border-white position-absolute bottom-0 p-1`}
                        />
                      </div>
                    </td>
                    <td>{user.name}</td>
                    <td className="d-none d-md-table-cell">{user.email}</td>
                    <td>{user.phone}</td>
                    <td className="d-none d-md-table-cell">
                      {user.isAdmin ? "Admin" : "User"}
                    </td>
                    <td>
                      <Link
                        to={`/user/edit_user/${user.id}`}
                        className="btn btn-warning btn-sm m-2 text-light text-light"
                        title="Edit User"
                      >
                        <i className="fas fa-tools me-2"></i>Edit
                      </Link>
                      <a
                        href="#"
                        className="btn btn-danger btn-sm"
                        title="Delete User"
                        onClick={() => {
                          Alart.alartDelete(tb, `${user.id}`);
                          setReRender(true);
                        }}
                      >
                        <i className="fas fa-trash-alt me-2"></i>Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {users.length > itemsPerPage ? (
              <div>
                <Pagination
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  totalItems={users.length}
                  paginate={paginate}
                />
              </div>
            ) : (
              ""
            )}
            <div>
              <label>Set Users Per Page</label>
              <select
                onChange={(e) => {
                  changeUserPP(e.target.value);
                  setCurrentPage(1);
                }}
                className="bg-secondary text-light ms-2"
                value={itemsPerPage}
              >
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
