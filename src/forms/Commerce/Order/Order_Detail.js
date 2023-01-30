import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/Header/Header';
import { SideBar } from '../../../components/SideBar/SideBar';
import productItem from '../../assets/img/user.jpg';
import productItem1 from '../../assets/img/testimonial-1.jpg';
import productItem2 from '../../assets/img/testimonial-2.jpg';
export const Order_Detail = () => {
    return (
        <>
            <SideBar />
            <div className='content mb-4'>
                <Header />


                {/* Delivered or Cancelled Section */}
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-sm-12">
                            <div className="bg-secondary rounded h-100 p-4">

                                <div className="row mb-4">
                                    <div className="col-md-6"><h3 className='fs-5'>ORDERS DETAILS</h3></div>
                                    <div className="col-md-6">
                                        <Link to='/order' className='btn btn-success btn-sm bg-success px-3 py-2 fw-bold float-end'><i className='fas fa-undo-alt me-2' />Back To Order</Link>
                                    </div>
                                </div>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th>Order ID</th>
                                            <td>1</td>
                                            <th>Order Date</th>
                                            <td>18 Jan 2023 10:19 PM</td>
                                            <th>Status</th>
                                            <td>ordered</td>

                                            {/* Delivered Date is going to appear when you click "Delivery Button" on Order Index page */}
                                            <th>Delivered Date</th>
                                            <td>18 Jan 2023</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Order Item */}
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-sm-12">
                            <div className="bg-secondary rounded h-100 p-4">

                                <div className="row mb-4">
                                    <div className="col-md-6"><h3 className='fs-5'>ORDERED ITEMS</h3></div>
                                    <div className="col-md-6">
                                        <Link to='/order' className='btn btn-success btn-sm bg-success px-3 py-2 fw-bold float-end'><i className='fas fa-undo-alt me-2' />Back To Order</Link>
                                    </div>
                                </div>

                                <div className="row mb-4 py-2">
                                    <div className="col-md-6"><h3 className='fs-5'>Products Item</h3></div>
                                </div>
                                <table className="table text-center">
                                    <tbody>
                                        <tr>
                                            <th>#</th>
                                            <th>Product Image</th>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Unit Price</th>
                                            <th>Total</th>
                                        </tr>
                                        <tr>
                                            <td>1. </td>
                                            <td><img src={productItem} width="50" /></td>
                                            <td>Gaming Chair</td>
                                            <td>6</td>
                                            <td>$15</td>
                                            <td>$90</td>
                                        </tr>
                                        <tr>
                                            <td>2. </td>
                                            <td><img src={productItem1} width="50" /></td>
                                            <td>Gaming Chair</td>
                                            <td>6</td>
                                            <td>$15</td>
                                            <td>$90</td>
                                        </tr>
                                        <tr>
                                            <td>3. </td>
                                            <td><img src={productItem2} width="50" /></td>
                                            <td>Gaming Chair</td>
                                            <td>6</td>
                                            <td>$15</td>
                                            <td>$90</td>
                                        </tr>


                                    </tbody>
                                </table>

                                <div className="row mb-4 py-2">
                                    <div className="col-md-6"><h3 className='fs-5'>Order Summary</h3></div>
                                </div>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>SubTotal</td>
                                            <th className='text-end'>$250</th>
                                        </tr>
                                        <tr>
                                            <td>Tax</td>
                                            <th className='text-end'>$3.5</th>
                                        </tr>
                                        <tr>
                                            <td>Shipping</td>
                                            <th className='text-end'>Free Shipping</th>
                                        </tr>
                                        <tr>
                                            <td>Total</td>
                                            <th className='text-end'>$253.5</th>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Billing Details */}
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-sm-12">
                            <div className="bg-secondary rounded h-100 p-4">

                                <div className="row mb-4 py-2">
                                    <div className="col-md-6"><h3 className='fs-5'>BILLING DETAILS</h3></div>
                                </div>
                                <table className="table table-striped">
                                    <tbody>
                                        <tr>
                                            <th>First Name</th>
                                            <td>Chan</td>
                                            <th>Last Name</th>
                                            <td>Sea</td>
                                        </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>012 333 4444</td>
                                            <th>Email</th>
                                            <td>sea.chan@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <th>Line 1</th>
                                            <td>H1565, St 2400, Meanchey, Khan Sensok, Phnom Penh, Cambodia</td>
                                            <th>Line 2</th>
                                            <td>H1565, St 2400, Meanchey, Khan Sensok, Phnom Penh, Cambodia</td>
                                        </tr>
                                        <tr>
                                            <th>City</th>
                                            <td>Phnom Penh</td>
                                            <th>Province</th>
                                            <td>Phnom Penh</td>
                                        </tr>
                                        <tr>
                                            <th>Country</th>
                                            <td>Cambodia</td>
                                            <th>Zip Code</th>
                                            <td>+ (855)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Transaction */}
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-sm-12">
                            <div className="bg-secondary rounded h-100 p-4">

                                <div className="row mb-4 py-2">
                                    <div className="col-md-6"><h3 className='fs-5'>TRANSACTION</h3></div>
                                </div>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th>Transaction Mode</th>
                                            <td>Cash On Delivery</td>
                                        </tr>
                                        <tr>
                                            <th>Transaction Status</th>
                                            <td>Pending</td>
                                        </tr>
                                        <tr>
                                            <th>Transaction Date</th>
                                            <td>18 Jan 2023 10:19 PM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>



    )
}
