import React, { useEffect, useState } from "react";
import { SideBar } from "./SideBar/SideBar";
import { Header } from "./Header/Header";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import ApiController from "../service/Controller";
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      if (e.key == "`") {
        handleClick();
      }
    });
  }, [open]);
  
  useEffect(() => {
    if (!ApiController.ProtectedRoute()) navigate("/");
  }, []);
  return (
    <>
      <SideBar open={open} />
      <div className={`content ${open ? "open" : ""}`}>
        <Header click={() => handleClick()} />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default ProtectedRoute;
