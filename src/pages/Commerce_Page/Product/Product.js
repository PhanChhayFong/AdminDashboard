import React from "react";
import { Header } from "../../../components/Header/Header";
import { SideBar } from "../../../components/SideBar/SideBar";
import { Product_Index } from "../../../forms/Commerce/Product/Product_Index";

export const Product = () => {
  return (
    <>
      <SideBar />
      <div className="content">
        <Header />
        <Product_Index />
      </div>
    </>
  );
};
