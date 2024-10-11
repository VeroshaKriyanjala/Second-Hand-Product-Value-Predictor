import React from "react";
import SideBar from "../Components/SideBar";
import { Outlet } from "react-router-dom";

function DashBoard() {
  return (
    <div className="layout bg-white flex">
      <div className="sidebar-dev w-[18%] fixed top-[90px] h-full">
        <SideBar />
      </div>
      <div className="content w-full ml-[18%]">
        <Outlet />
      </div>
    </div>
  );
}

export default DashBoard;
