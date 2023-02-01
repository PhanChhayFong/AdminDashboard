import React, { useEffect, useState } from "react";
import ApiService from "../service/api-service";
import { SideBar } from "./SideBar/SideBar";
import { Header } from "./Header/Header";
import { useNavigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const user= { active: true }
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      const item = JSON.parse(token);
      ApiService.updateActive("users", item.user.id, user);
      const expItem = new Date(item.expDate);
      const now = new Date();
      if (now.getTime() > expItem) {
        localStorage.clear("token");
        navigate("/");
      }
    }
  }, []);
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <>
    <SideBar open={open}/>
    <div className={`content ${open?"open":""}`}>
      <Header click={()=>{handleClick()}}/>
      {children}
    </div>
    </>
  );
};

export default ProtectedRoute;
