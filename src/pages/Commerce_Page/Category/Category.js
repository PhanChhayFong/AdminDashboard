import React from "react";
import { SideBar } from "../../../components/SideBar/SideBar";
import { Header } from "../../../components/Header/Header";
import { Category_Index } from "../../../forms/Commerce/Category/Category_Index";

export const Category = () => {
  return (
    <>
      <SideBar />
      <div className="content">
        <Header />
        <Category_Index />
      </div>
    </>
  );
};
