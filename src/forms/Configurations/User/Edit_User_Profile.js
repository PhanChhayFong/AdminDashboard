import React from 'react';
import { Link } from "react-router-dom";
import User1 from "../../assets/img/user.jpg";

export const Edit_User_Profile = () => {
  return (
    <>
    <div className="content open">
        <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
                <div className="col-12">
                    <div className="bg-secondary rounded h-100 p-4">
                        <form action="" method="PUT" enctype="multipart/form-data">
                            
                            <div className="row mb-4">
                                <div className="col-md-6"><h3 className='fs-5'>My Profile</h3></div>
                                <div className="col-md-6">
                                    <Link to='/profile' className='btn btn-success btn-sm bg-success px-3 py-2 fw-bold float-end'><i className='fas fa-undo-alt me-2' />Back To Profile</Link>
                                    <button className="btn btn-warning bg-warning btn-sm float-end px-4 py-2 me-2 fw-bold"><i className="fas fa-tools me-2"/>Update Profile</button>
                                </div>
                            </div>
                            
                            <div className="row mb-4">

                                <div className="col-md-3">

                                    <div className="mb-5">
                                        <label htmlFor="image" className="form-label" >User Profile</label>
                                        <input type="file" className="form-control" id="image" />
                                    </div>

                                    <div className="form-floating mb-3 d-flex justify-content-center align-item-center rounded-circle">
                                        <img src={User1} className="rounded-circle border border-5 border-danger" width="250"/>
                                    </div>


                                </div>

                                <div className="col-md-9">
                                 

                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="name" value="Ren Sophanarith" placeholder="name" />
                                        <label for="name" className="form-label" >Name</label>
                                        
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="email"  value="ren.sophanarith@gmail.com" placeholder="email" />
                                        <label for="email" className="form-label" >Email</label>
                                        
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="phone" value="096 999 9999" placeholder="phone"/>
                                        <label className="form-label">Phone</label>
                                        
                                    </div>


                                    <div className="form-floating mb-3">
                                        <input type="date" className="form-control" id="date_of_birt" value="10-Jan-2000" placeholder="date_of_birth" />
                                        <label for="date_of_birth" className="form-label" >Date of Birth</label>
                                        
                                    </div>

                                 
                                    <hr className="border border-5 border-danger"/>

                              

                                    <div className="form-floating mb-3">
                                        <textarea class="form-control company-address" placeholder="address">
                                             H2400, St2400, Sangkat Sensok II, Khan Sensok, Phnom Penh, Cambodia 
                                        </textarea>
                                        <label htmlFor="address" className="form-label">Address</label>
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
  )
}
