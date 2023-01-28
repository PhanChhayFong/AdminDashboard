import React from "react";
import userProfile from "../../assets/img/user.jpg";
import { NavLink, Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="sidebar pe-4 pb-3">
      <nav className="navbar bg-secondary navbar-dark">
        {/* <a href="#" className="navbar-brand mx-4 mb-3">
                <h3 className="text-primary"><i className="fa fa-user-edit me-2" />DarkPan</h3>
            </a> */}
        {/* <Route path='furniture-store/admin' element={<Home/>} className="navbar-brand mx-4 mb-3">
                <h3 className="text-primary"><i className="fa fa-user-edit me-2" />DarkPan</h3>
            </Route> */}
        <Link to="/admin" className="navbar-brand mx-4 mb-3">
          <h3 className="text-primary">
            <i className="fa fa-user-edit me-2" />
            DarkPan
          </h3>
        </Link>
        <div className="d-flex align-items-center ms-4 mb-4">
          <div className="position-relative">
            <img
              className="rounded-circle"
              src={userProfile}
              style={{ width: 40, height: 40 }}
            />
            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
          </div>
          <div className="ms-3">
            <h6 className="mb-0">Jhon Doe</h6>
            <span>Admin</span>
          </div>
        </div>
        <div className="navbar-nav w-100">
          <NavLink to="/admin" className="nav-item nav-link">
            <i className="fa fa-tachometer-alt me-2" />
            Dashboard
          </NavLink>
          <NavLink to="/slideshow" className="nav-item nav-link">
            <i className="fas fa-columns me-2" />
            Slideshow
          </NavLink>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i className="fas fa-dumpster me-2" />
              Commerce
            </a>
            <div className="nav-item dropdown-menu bg-transparent border-0">
              <NavLink to="/product" className="nav-link dropdown-item">
                <i className="fas fa-archive me-2" />
                Product
              </NavLink>
              <NavLink to="/category" className="nav-link dropdown-item">
                <i className="fas fa-calendar-day me-2" />
                Category
              </NavLink>
              <NavLink to="/order" className="nav-link dropdown-item">
                <i className="fas fa-sort-amount-up-alt me-2" />
                Order
              </NavLink>
              <NavLink to="/cart" className="nav-link dropdown-item">
                <i className="fas fa-dolly-flatbed me-2" />
                Shopping Cart
              </NavLink>
              <NavLink to="/shipping" className="nav-link dropdown-item">
                <i className="fas fa-shipping-fast me-2" />
                Shipping
              </NavLink>
              <NavLink to="/transaction" className="nav-link dropdown-item">
                <i className="fas fa-cash-register me-2" />
                Transaction
              </NavLink>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i className="fas fa-cogs me-2" />
              Configurations
            </a>
            <div className="nav-item dropdown-menu bg-transparent border-0">
              <NavLink to="/user" className="nav-link dropdown-item">
                <i className="fas fa-user me-2" />
                Users
              </NavLink>
              <a href="404.html" className="nav-link dropdown-item">
                <i className="fas fa-sign-out-alt me-2" />
                Sign Out
              </a>
            </div>
          </div>
          <NavLink to="/company" className="nav-item nav-link">
            <i className="fas fa-campground me-2" />
            Company
          </NavLink>
          <NavLink to="/" className="nav-item nav-link">
            <i className="fas fa-user me-2" />
            Login
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
