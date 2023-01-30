import React from 'react';
import { Link } from 'react-router-dom';


export const Order_Index = () => {
    return (
        <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
                <div className="col-sm-12">
                    <div className="bg-secondary rounded h-100 p-4">

                        <div className="row py-2">
                            <div className="col-md-12"><h3 className='fs-5'>All Orders</h3></div>

                        </div>
                        <table className="table">
                            <thead>

                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">S_Total ($)</th> {/* SubTotal */}
                                    <th scope="col">Tax ($)</th>
                                    <th scope="col">Total ($)</th>
                                    <th scope="col">F_Name</th> {/* First Name */}
                                    <th scope="col">L_Name</th> {/* Last Name */}
                                    <th scope="col">Tel</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Order Date</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>$250</td>
                                    <td>$3.5</td>
                                    <td>$253.5</td>
                                    <td>Chan</td>
                                    <td>Sea</td>
                                    <td>012 333 4444</td>
                                    <td>sea.chan@gmail.com</td>
                                    <td>Ordered</td> { /* 
                                        1. When we clicked on "Delivery Button", it will change from "Ordered" to "Delivered. 
                                        2. But, if we clicked on the "Cancel Button", it will change from "Ordered" to "Canccel"
                                    */}
                                    <td>18 Jan 2023 10:19 PM</td>
                                    <td>
                                        <Link to='/order/order_detail/:id' className="btn btn-success bg-success btn-sm me-2" title="Order Detail"> <i className="fas fa-eye"></i></Link> { /* View Order Detail */}
                                        <a href="#" className='btn btn-warning btn-sm me-2' title='Delivery Order'><i className='fas fa-truck'></i></a> { /* Delivery Order */}
                                        <a href="#" class="btn btn-danger btn-sm" title="Cancel Order"><i className="fas fa-hourglass-half"></i></a> { /* Cancel Order */}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>$1150</td>
                                    <td>$15</td>
                                    <td>$1165</td>
                                    <td>Chhay Fong</td>
                                    <td>Phan</td>
                                    <td>012 999 8888</td>
                                    <td>fong.9999@gmail.com</td>
                                    <td>Ordered</td>
                                    <td>25 Jan 2023 10:30 AM</td>
                                    <td>
                                        <Link to='/order/order_detail/:id' className="btn btn-success bg-success btn-sm me-2" title="Order Detail"> <i className="fas fa-eye"></i></Link> { /* View Order Detail */}
                                        <a href="#" className='btn btn-warning btn-sm me-2' title='Delivery Order'><i className='fas fa-truck'></i></a> { /* Delivery Order */}
                                        <a href="#" class="btn btn-danger btn-sm" title="Cancel Order"><i className="fas fa-hourglass-half"></i></a> { /* Cancel Order */}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>$550</td>
                                    <td>$8</td>
                                    <td>$558</td>
                                    <td>Putheara</td>
                                    <td>Koeun</td>
                                    <td>012 999 9999</td>
                                    <td>theara.6666@gmail.com</td>
                                    <td>Ordered</td>
                                    <td>21 Jan 2023 11:30 PM</td>
                                    <td>
                                        <Link to='/order/order_detail/:id' className="btn btn-success bg-success btn-sm me-2" title="Order Detail"> <i className="fas fa-eye"></i></Link> { /* View Order Detail */}
                                        <a href="#" className='btn btn-warning btn-sm me-2' title='Delivery Order'><i className='fas fa-truck'></i></a> { /* Delivery Order */}
                                        <a href="#" class="btn btn-danger btn-sm" title="Cancel Order"><i className="fas fa-hourglass-half"></i></a> { /* Cancel Order */}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}
