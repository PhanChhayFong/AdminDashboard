import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Homepage/Home";
import { Category } from "./pages/Commerce_Page/Category/Category";
import { Slideshow } from "./pages/Commerce_Page/Slideshow/Slideshow";
import { Product } from "./pages/Commerce_Page/Product/Product";
import { Order } from "./pages/Commerce_Page/Order/Order";
import { Shopping_Cart } from "./pages/Commerce_Page/Shopping_Cart/Shopping_Cart";
import { Shipping } from "./pages/Commerce_Page/Shipping/Shipping";
import { Transaction } from "./pages/Commerce_Page/Transaction/Transaction";
import { Company } from "./pages/Configuration_Page/Company/Company";
import { User } from "./pages/Configuration_Page/User/User";

import { Create_Slideshow } from "./forms/Slideshow/Create_Slideshow";
import { Edit_Slideshow } from "./forms/Slideshow/Edit_Slideshow";

import { Edit_Company } from "./forms/Configurations/Company/Edit_Company";

import { Create_User } from "./forms/Configurations/User/Create_User";
import { Edit_User } from "./forms/Configurations/User/Edit_User";
import { View_User } from "./forms/Configurations/User/View_User";

import { Create_Category } from "./forms/Commerce/Category/Create_Category";
import { Edit_Category } from "./forms/Commerce/Category/Edit_Category";

import { Create_Product } from "./forms/Commerce/Product/Create_Product";
import { Edit_Product } from "./forms/Commerce/Product/Edit_Product";

import { Login } from "./pages/Authentication/Login";
import { Register } from "./pages/Authentication/Register";

function App() {
  return (
    <>
      <Routes>
        {/* Link to Admin Page */}
        <Route path="/admin" element={<Home />}></Route>

        {/* Link for SideBar */}
        <Route path="/category" element={<Category />}></Route>
        <Route path="/slideshow" element={<Slideshow />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/cart" element={<Shopping_Cart />}></Route>
        <Route path="/shipping" element={<Shipping />}></Route>
        <Route path="/transaction" element={<Transaction />}></Route>
        <Route path="/company" element={<Company />}></Route>
        <Route path="/user" element={<User />}></Route>

        {/* Link for Slide Form */}
        <Route path="/slideshow/create_slideshow" element={<Create_Slideshow />}></Route>
        <Route path="/slideshow/edit_slideshow/:id" element={<Edit_Slideshow />} ></Route>

        {/* Link for Company Form */}
        <Route path="/company/edit_company" element={<Edit_Company />}></Route>

        {/* Link for User Form */}
        <Route path="/user/create_user" element={<Create_User />}></Route>
        <Route path="/user/edit_user/:id" element={<Edit_User />}></Route>
        <Route path="/user/view_user/:id" element={<View_User />}></Route>

        {/* Link for Category Form */}
        <Route path="/category/create_category" element={<Create_Category />} ></Route>
        <Route path="/category/edit_category/:id" element={<Edit_Category />} ></Route>

        {/* Link for Product Form */}
        <Route path="/product/create_product" element={<Create_Product />} ></Route>
        <Route path="/product/edit_product/:id" element={<Edit_Product />} ></Route>

        {/* Link for Login Form */}
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </>
  );
}

export default App;
