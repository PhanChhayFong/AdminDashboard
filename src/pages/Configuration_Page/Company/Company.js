import React from "react";
import { Header } from "../../../components/Header/Header";
import { SideBar } from "../../../components/SideBar/SideBar";
import { Company_Index } from "../../../forms/Configurations/Company/Company_Index";

export const Company = () => {
  return (
    <>
      <SideBar />
      <div className="content">
        <Header />
        <Company_Index />
      </div>
    </>
  );
};
