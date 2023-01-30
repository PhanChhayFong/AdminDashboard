import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiService from "../../../service/api-service";
import Pagination from "../../../components/Pagination";
import Swal from "sweetalert2";
window.Swal = Swal;

export const User_Index = () => {
  const [users, setUsers] = useState([]);
  const [reRender, setReRender] = useState(false);
  //about pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(5);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const changeUserPP = (e) => setitemsPerPage(e.target.value);
  const tb = "users";

  useEffect(() => {
    ApiService.getAll(tb)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setReRender(false);
  }, [reRender]);

  const alartDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        ApiService.delete(tb,id);
        setReRender(true);
      }
    });
  };
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
                  <th scope="col">Nº</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Type</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((user, i) => (
                  <tr key={i}>
                    <th scope="row">{i + 1 + indexOfFirstItem}</th>
                    <td>
                      <div className="position-relative rounded-circle" style={{ width: 40, height: 40, backgroundImage:`url(${user.image})`,backgroundRepeat:"no-repeat",backgroundSize:"100%",backgroundPosition:"center",backgroundColor:"#0775d4" }}>
                        <div
                          className={`${
                            user.active ? "bg-success" : "bg-danger"
                          } rounded-circle border border-2 border-white position-absolute bottom-0 p-1`}
                        />
                      </div>
                    </td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.isAdmin ? "Admin" : "User"}</td>
                    <td>
                      <Link
                        to={`/user/edit_user/${user.id}`}
                        className="btn btn-warning btn-sm me-2"
                        title="Edit User"
                      >
                        <i className="fas fa-tools me-2"></i>Edit
                      </Link>
                      <a
                        href="#"
                        className="btn btn-danger btn-sm"
                        title="Delete User"
                        onClick={() => {
                          alartDelete(`${user.id}`);
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
                  totalItems={users.length}
                  paginate={paginate}
                />
              </div>
            ) : (
              ""
            )}
            <div>
              <label>Set Sliders Per Page</label>
              <select
                onChange={changeUserPP}
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
