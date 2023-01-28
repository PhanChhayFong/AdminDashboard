import React from "react";
import { Header } from "../../../components/Header/Header";
import { SideBar } from "../../../components/SideBar/SideBar";
import { User_Index } from "../../../forms/Configurations/User/User_Index";

export const User = () => {
  return (
    <>
      <SideBar />
      <div className="content">
        <Header />
        <User_Index />
      </div>
    </>
  );
};
