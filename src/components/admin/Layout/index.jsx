import React from "react";
import Sidebar from "../sidebar/sidebar";
import { Outlet } from "react-router-dom";


export default function Layout() {
  const token = "1";

  return (
        <div className="flex">
          < Sidebar/>

          <div className="w-full layout">
            <Outlet />
          </div>
        </div>
  );
}