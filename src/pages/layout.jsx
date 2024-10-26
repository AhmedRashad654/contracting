import { Outlet } from "react-router-dom";
import Sidebar from "../componant/layout/Sidebar";
import Navbar from "../componant/layout/Navbar/Navbar";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
export default function Layout() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="flex ">
      <div
        className={`absolute lg:hidden top-8 text-grayColor z-10 ${
          openSidebar ? "left-[290px]" : "left-10"
        } cursor-pointer transition-all duration-300`}
        onClick={() => setOpenSidebar((e) => !e)}
      >
        <FaBars size={30} />
      </div>
      <div
        className={`w-[280px] lg:static absolute ${
          openSidebar ? "left-0" : "left-[-400px]"
        } transition-all duration-300`}
      >
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
