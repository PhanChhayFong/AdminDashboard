import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../../components/Header/Header";
import { SideBar } from "../../../components/SideBar/SideBar";
import categoryService from "../../../service/category.service";
import axios from "axios";
import Swal from "sweetalert2";
window.Swal = Swal;

export const Create_Category = () => {
  const [category, setCategory] = useState({
    name: "",
    icon: "",
  });
  const [ico, setIco] = useState();
  const hiddenFileInput = React.useRef(null);
  const handleClick = () => hiddenFileInput.current.click();
  const handleInputChange = (event) => {
    setIco(URL.createObjectURL(event.target.files[0]));
    setCategory({
      ...category,
      icon: event.target.files[0],
    });
  };
  const submit = async () => {
    if (!category.name == "") {
      const url = "http://localhost:5000/api/v1/categories";
      const formdata = new FormData();
      formdata.append("name", category.name);
      formdata.append("icon", category.image);
      axios.post(url, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Category Can't be Created",
        text: "Name is required!!!",
      });
    }
    // console.log(category);
  };
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
                      <h3 className="fs-5">Create Category</h3>
                    </div>
                    <div className="col-md-6">
                      <Link
                        to="/category"
                        className="btn btn-danger btn-sm bg-danger px-3 py-2 fw-bold float-end"
                      >
                        <i className="fas fa-undo-alt me-2" />
                        Back To Category
                      </Link>
                      <Link
                        to="/category"
                        onClick={() => submit()}
                        className="btn btn-success btn-sm float-end px-4 py-2 me-2 fw-bold"
                      >
                        <i className="fas fa-share-square me-2" />
                        Save
                      </Link>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-12">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={category.name}
                          placeholder="name"
                          onChange={(e) => {
                            setCategory({
                              ...category,
                              name: e.target.value,
                            });
                          }}
                        />
                        <label htmlFor="name">Name *</label>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="image" className="form-label">
                          Category Icon
                        </label>
                        <div
                          style={{
                            width: "40%",
                            margin: "10px auto",
                            textAlign: "center",
                          }}
                        >
                          <label
                            onClick={handleClick}
                            className="form-control"
                            style={{ cursor: "pointer" }}
                          >
                            Select Icon
                          </label>
                          <input
                            ref={hiddenFileInput}
                            type="file"
                            style={{ display: "none" }}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div style={{ textAlign: "center" }}>
                          {ico ? (
                            <img
                              src={URL.createObjectURL(category.icon)}
                              height="200px"
                              style={{
                                border: "1px solid white",
                                padding: "20px",
                              }}
                            />
                          ) : null}
                        </div>
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