import React from "react";
import { Link } from "react-router-dom";
import ApiService from "../../../service/api-service";

export const Order_Index = () => {
  return (
    <div className="container-fluid pt-4 px-4">
      <div className="row g-4">
        <div className="col-sm-12">
          <div className="bg-secondary rounded h-100 p-4">
            <div className="row py-2">
              <div className="col-md-12">
                <h3 className="fs-5">All Orders</h3>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Nº</th>
                  <th>S_Total</th>
                  <th>Tax</th>
                  <th>Total</th>
                  <th>Name</th>
                  <th>Tel</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Order Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>$250</td>
                  <td>$3.5</td>
                  <td>$253.5</td>
                  <td>Sea Chan</td>
                  <td>012 333 4444</td>
                  <td>sea.chan@gmail.com</td>
                  <td>Ordered</td>
                  <td>18 Jan 2023 10:19 PM</td>
                  <td>
                    <Link
                      to="/order/order_detail/:id"
                      className="btn btn-success bg-success btn-sm me-2"
                      title="Order Detail"
                    >
                      <i className="fas fa-eye"></i>
                    </Link>
                    {/* View Order Detail */}
                    <a
                      href="#"
                      className="btn btn-warning btn-sm me-2"
                      title="Delivery Order"
                    >
                      <i className="fas fa-truck"></i>
                    </a>
                    {/* Delivery Order */}
                    <a
                      href="#"
                      class="btn btn-danger btn-sm"
                      title="Cancel Order"
                    >
                      <i className="fas fa-hourglass-half"></i>
                    </a>
                    {/* Cancel Order */}
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
