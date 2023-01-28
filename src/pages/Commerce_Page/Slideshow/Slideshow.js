import React from "react";
import { SideBar } from "../../../components/SideBar/SideBar";
import { Header } from "../../../components/Header/Header";
import { Slideshow_Index } from "../../../forms/Slideshow/Slideshow_Index";

export const Slideshow = () => {
  return (
    <>
      <SideBar />
      <div className="content">
        <Header />
        <Slideshow_Index />
      </div>
    </>
  );
};
