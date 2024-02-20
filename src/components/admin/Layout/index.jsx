import React from "react";
import Sidebar from "../sidebar/sidebar";
import { Outlet } from "react-router-dom";


export default function Layout() {
  const token = "1";

  return (
        <div className="flex">
          < Sidebar/>

          <div className="w-full layout">
        <div className="flex h-[100px] px-[40px] justify-end items-center">
     <div> <button className="bg-red-500 text-white p-2 w-[120px]  rounded-xl" >Chiqish</button></div>
        </div>
            <Outlet />
          </div>
        </div>
  );
}