import React from "react";
import { Outlet } from "react-router";
import SideMenu from "../components/Home/SideMenu";

import DashboardHeader from "../components/Home/DashboardHeader";

export default function Home() {
  return (
    <div className="flex gap-10 md:ps-60 flex-col md:flex-row">
      <SideMenu />
      <div className="w-full px-10 xl:px-15 py-10 flex flex-col gap-10">
        <DashboardHeader />
        <Outlet />
      </div>
    </div>
  );
}
