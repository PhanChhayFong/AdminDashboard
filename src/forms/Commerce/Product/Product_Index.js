import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiController from "../../../service/Controller";
import Pagination from "../../../components/Pagination";
import Alart from "../../../service/Alart";

export const Product_Index = () => {
  const tb = "products";
  const [products, setProducts] = useState([]);
  const [reRender, setReRender] = useState(false);
  const [status, setStatus] = useState("dateCreated");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(5);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const changeProductPP = (e) => setitemsPerPage(e);
  useEffect(() => {
    setReRender(false);
    ApiController.getAll(`${tb}/get/${status}`).then((res) =>
      setProducts(res.data)
    );
  }, [reRender]);
  const stockStatus = (countInStock) => {
    if (countInStock == 0) return "Out Of Stock";
    else if (countInStock < 20) return "Low In Stock";
    else return "In Stock";
  };
  const changeStatus = (e) => {
    setStatus(e.target.value);
    setReRender(true);
  };
  return (
    <div className="container-fluid pt-4 px-4">
      <div className="row g-4">
        <div className="col-sm-12">
          <div className="bg-secondary rounded h-100 p-4">
            <div className="row text-start text-md-start">
              <div className="col-md-4 col-12">
                <h3 className="fs-5">Product</h3>
              </div>
              <div className="col-md-4 col-12 text-md-center">
                <label className="h5">Sort Product By</label>
                <select
                  onChange={changeStatus}
                  value={status}
                  className="bg-secondary text-light ms-2"
                >
                  <option value={"dateCreated"}>Date Created</option>
                  <option value={"name"}>Product Name</option>
                  <option value={"sku"}>Product Code</option>
                  <option value={"category"}>Category</option>
                  <option value={"countInStock"}>Quantity</option>
                  <option value={"salePrice"}>Sale Price</option>
                </select>
              </div>
              <div className="col-md-4 col-12">
                <Link
                  to="/product/create_product"
                  className="btn btn-success btn-sm bg-success px-3 py-2 fw-bold float-md-end"
                >
                  <i className="fas fa-plus me-2" />
                  Add Product
                </Link>
              </div>
            </div>

            <table className="table text-center text-md-start">
              <thead>
                <tr>
                  <th>Nº</th>
                  <th>Image</th>
                  <th className="d-none d-md-table-cell">Product Code</th>
                  <th className="d-none d-md-table-cell">Stock Status</th>
                  <th>Name</th>
                  <th className="d-none d-md-table-cell">Category</th>
                  <th>Quantity</th>
                  <th className="d-none d-md-table-cell">Regular Price</th>
                  <th>Sale Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((product, i) => (
                  <tr key={product.id}>
                    <td>{i + 1 + indexOfFirstItem}</td>
                    <td>
                      <img src={product.image} width="50" height="50" />
                    </td>
                    <td className="d-none d-md-table-cell">{product.sku}</td>
                    <td className="d-none d-md-table-cell">
                      {stockStatus(`${product.countInStock}`)}
                    </td>
                    <td>{product.name}</td>
                    <td className="d-none d-md-table-cell">
                      {product.category == null ? "" : product.category.name}
                    </td>
                    <td>{product.countInStock}</td>
                    <td className="d-none d-md-table-cell">
                      $ {product.regularPrice}
                    </td>
                    <td>$ {product.salePrice}</td>
                    <td>
                      <div className="d-flex">
                        <Link
                          to={`/product/edit_product/${product.id}`}
                          className="btn btn-warning btn-sm me-2"
                          title="Edit Product"
                        >
                          <i className="fas fa-tools"></i>
                        </Link>
                        <a
                          className="btn btn-danger btn-sm"
                          onClick={() => {
                            Alart.alartDelete(tb, `${product.id}`);
                            setReRender(true);
                          }}
                          title="Delete"
                        >
                          <i className="fas fa-trash alt"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {products.length > itemsPerPage ? (
              <div>
                <Pagination
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  totalItems={products.length}
                  paginate={paginate}
                />
              </div>
            ) : (
              ""
            )}
            <div>
              <label>Set Products Per Page</label>
              <select
                onChange={(e) => {
                  changeProductPP(e.target.value);
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
