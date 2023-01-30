import React from 'react';
import { SideBar } from '../../../components/SideBar/SideBar';
import { Header } from '../../../components/Header/Header';
import { Order_Index } from '../../../forms/Commerce/Order/Order_Index';
export const Order = () => {
  return (
    <>
      <SideBar />
      <div class="content">
        <Header />
        <Order_Index/>
      </div>
      
    </>
  )
}
