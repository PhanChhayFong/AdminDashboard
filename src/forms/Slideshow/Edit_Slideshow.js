import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { SideBar } from "../../components/SideBar/SideBar";
import sliderService from "../../service/slider.service";
import axios from "axios";
import Swal from "sweetalert2";
window.Swal = Swal;

export const Edit_Slideshow = () => {
  const params = useParams();

  const [slider, setSliders] = useState([]);
  const [changed, setChanged] = useState(false);
  const [img, setImg] = useState();
  useEffect(() => {
    sliderService
      .get(params.id)
      .then((res) => {
        setSliders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const alart = () => {
    if (changed) {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          submit();
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  };
  const hiddenFileInput = React.useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleInputChange = (event) => {
    setImg(URL.createObjectURL(event.target.files[0]));
    setSliders({
      ...slider,
      image: event.target.files[0],
    });
    setChanged(true);
  };

  const submit = async () => {
    if (img) {
      const url = "http://localhost:5000/api/v1/sliders/image/";
      const formdata = new FormData();
      formdata.append("image", slider.image);

      axios
        .put(url + params.id, formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          console.log(res);
        });
    }
    sliderService.update(params.id, slider);
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
                <form action="" method="PUT" encType="multipart/form-data">
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <h3 className="fs-5">Edit Slideshow</h3>
                    </div>
                    <div className="col-md-6">
                      <Link
                        onClick={() => alart()}
                        to="/slideshow"
                        className="btn btn-success btn-sm bg-success px-3 py-2 fw-bold float-end"
                      >
                        <i className="fas fa-undo-alt me-2" />
                        Back To Slideshow
                      </Link>
                      {changed ? (
                        <Link
                          className="btn btn-warning bg-warning btn-sm float-end px-4 py-2 me-2 fw-bold"
                          onClick={() => submit()}
                          to="/slideshow"
                        >
                          <i className="fas fa-tools me-2" /> Update
                        </Link>
                      ) : null}
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          value={slider.title}
                          onChange={(e) => {
                            setSliders({
                              ...slider,
                              title: e.target.value,
                            });
                            setChanged(true);
                          }}
                        />
                        <label htmlFor="title" className="form-label">
                          Title
                        </label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="mini_title"
                          value={slider.miniTitle}
                          onChange={(e) => {
                            setSliders({
                              ...slider,
                              miniTitle: e.target.value,
                            });
                            setChanged(true);
                          }}
                        />
                        <label htmlFor="mini_title" className="form-label">
                          Mini Title
                        </label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="link"
                          value={slider.url}
                          onChange={(e) => {
                            setSliders({
                              ...slider,
                              url: e.target.value,
                            });
                            setChanged(true);
                          }}
                        />
                        <label htmlFor="link" className="form-label">
                          Slide Link
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <textarea
                          className="form-control"
                          style={{ height: "200px" }}
                          value={slider.description}
                          onChange={(e) => {
                            setSliders({
                              ...slider,
                              description: e.target.value,
                            });
                            setChanged(true);
                          }}
                        ></textarea>
                        <label htmlFor="description" className="form-label">
                          Descriptions
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5 text-center">
                    <label className="form-label"> Slide Image </label>
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
                        Change Image
                      </label>
                      <input
                        ref={hiddenFileInput}
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      {img ? (
                        <img
                          src={img}
                          height="200px"
                          style={{
                            border: "1px solid white",
                            padding: "20px",
                          }}
                        />
                      ) : (
                        <img
                          src={`${slider.image}`}
                          height="200px"
                          style={{
                            border: "1px solid white",
                            padding: "20px",
                          }}
                        />
                      )}
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
