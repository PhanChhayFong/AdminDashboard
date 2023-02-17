import React, { useEffect, useState } from "react";
import { SideBar } from "./SideBar/SideBar";
import { Header } from "./Header/Header";
import { useNavigate } from "react-router-dom";
import ApiController from "../service/Controller";
import Alart from "../service/Alart";
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  const [darkmode, setDarkmode] = useState(false);
  const handleDarkmode = () => setDarkmode(!darkmode);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      const item = JSON.parse(token);
      const expItem = new Date(item.expDate);
      const now = new Date();
      if (now.getTime() > expItem || !item.user.isAdmin) {
        ApiController.updateActive("users", item.user.id, { active: false });
        localStorage.clear("token");
        Alart.alartLoginError("Login Expired", "Please Login Again!!!");
        navigate("/");
      }
    }
  }, []);
  return (
    <>
      <SideBar open={open} />
      <div className={`content ${open ? "open" : ""}`}>
        <Header
          click={() => handleClick()}
          clickDarkmode={() => handleDarkmode()}
          darkmodeStatus = {darkmode}
        />
        {children}
      </div>
    </>
  );
};

export default ProtectedRoute;
