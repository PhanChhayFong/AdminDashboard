import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sliderService from "../../service/slider.service";
import Pagination from "../../components/Pagination";
import Swal from "sweetalert2";
window.Swal = Swal;
export const Slideshow_Index = () => {
  const [sliders, setSliders] = useState([]);
  const [reRender, setReRender] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(5);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sliders.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    setReRender(false);
    sliderService
      .getAll()
      .then((res) => {
        setSliders(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reRender]);
  const toggleEye = (enable) => {
    if (enable == "true") {
      return <i className="fas fa-eye" />;
    }
    return <i className="fas fa-eye-slash" />;
  };
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
        sliderService.delete(id);
        setReRender(true);
      }
    });
  };
  const alartError = (error) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Can't Move " + error,
    });
  };
  const swapOrder = (Cid, Nid) => {
    Nid != "Up" && Nid != "Down"
      ? sliderService.updateOrder(Cid, Nid)
      : alartError(Nid);
    // setReRender(true);
    refresh();
  };
  const changeSliderPP = (e) => setitemsPerPage(e.target.value);
  const refresh = () => window.location.reload(true);
  return (
    <div className="container-fluid pt-4 px-4">
      <div className="row g-4">
        <div className="col-sm-12">
          <div className="bg-secondary rounded h-100 p-4">
            <div className="row">
              <div className="col-md-6">
                <h3 className="fs-5">Slideshow</h3>
              </div>
              <div className="col-md-6">
                <Link
                  to="/slideshow/create_slideshow"
                  className="btn btn-success btn-sm bg-success px-3 py-2 fw-bold float-end"
                >
                  <i className="fas fa-plus me-2" />
                  Add Slideshow
                </Link>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nº</th>
                  <th scope="col">Image</th>
                  <th scope="col">Title</th>
                  <th scope="col">Link</th>
                  <th scope="col">Order</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((slider, i) => (
                  <tr key={slider.id}>
                    <th scope="row">{i + 1 + indexOfFirstItem}</th>
                    <td>
                      <img src={slider.image} height="50px" />
                    </td>
                    <td>{slider.title}</td>
                    <td>{slider.url}</td>
                    <td>{slider.order}</td>
                    <td>
                      <a
                        className="btn btn-success btn-sm me-2"
                        onClick={() => {
                          toggleEye(`${slider.enable}`);
                          sliderService.updateEnable(`${slider.id}`);
                          setReRender(true);
                        }}
                        title={`${slider.enable}`}
                      >
                        {toggleEye(`${slider.enable}`)}
                      </a>
                      <Link
                        to={`/slideshow/edit_slideshow/${slider.id}`}
                        className="btn btn-warning btn-sm me-2"
                        title="Edit"
                      >
                        <i className="fas fa-tools me-2"></i>Edit
                      </Link>
                      <a
                        className="btn btn-danger btn-sm me-2"
                        onClick={() => {
                          alartDelete(`${slider.id}`);
                        }}
                        title="Delete"
                      >
                        <i className="fas fa-trash alt me-2"></i>Delete
                      </a>
                      <a
                        className="btn btn-info btn-sm me-2"
                        onClick={() => {
                          swapOrder(
                            slider.id,
                            sliders[i - 1] ? sliders[i - 1].id : "Up"
                          );
                        }}
                        title="Move Up"
                      >
                        <i className="fa fa-caret-up"></i>
                      </a>
                      <a
                        className="btn btn-info btn-sm"
                        onClick={() => {
                          swapOrder(
                            slider.id,
                            sliders[i + 1] ? sliders[i + 1].id : "Down"
                          );
                        }}
                        title="Move Down"
                      >
                        <i className="fa fa-caret-down"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {sliders.length > itemsPerPage ? (
              <div>
                <Pagination
                  itemsPerPage={itemsPerPage}
                  totalItems={sliders.length}
                  paginate={paginate}
                />
              </div>
            ) : (
              ""
            )}
            <div>
              <label>Set Sliders Per Page</label>
              <select
                onChange={changeSliderPP}
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