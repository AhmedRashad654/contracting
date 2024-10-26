import { Link, useLocation } from "react-router-dom";
import { FaProjectDiagram } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa6";
import { MdOutlineAppRegistration } from "react-icons/md";
import { LuBookTemplate } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { TiGroup } from "react-icons/ti";
import { AiOutlineLogout } from "react-icons/ai";
export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col gap-2 bg-gray-200 min-h-screen pt-10 pb-4 overflow-hidden">
      <Link
        to={"/"}
        className={`flex items-center gap-2 text-grayColor p-3 ${
          pathname === "/" && "activeSidebar"
        }`}
      >
        <FaProjectDiagram size={20} />
        <h1>Projects</h1>
      </Link>
      <Link to={"/"} className="flex items-center gap-2 text-grayColor p-3">
        <MdOutlineAppRegistration size={20} />
        <h1>Estimator</h1>
      </Link>
      <Link to={"/"} className="flex items-center gap-2 text-grayColor p-3">
        <LuBookTemplate size={20} />
        <h1>BOQ Templates</h1>
      </Link>
      <Link
        to={"/contracts"}
        className={`flex items-center gap-2 text-grayColor p-3 ${
          pathname.includes("contract") && "activeSidebar"
        }`}
      >
        <FaFileContract size={20} />
        <h1>Contracts</h1>
      </Link>
      <Link to={"/"} className="flex items-center gap-2 text-grayColor p-3">
        <FaCheckCircle size={20} />
        <h1>Work Confirmation </h1>
      </Link>
      <Link to={"/"} className="flex items-center gap-2 text-grayColor p-3">
        <MdPayment size={20} />
        <h1>Billing</h1>
      </Link>
      <Link to={"/"} className="flex items-center gap-2 text-grayColor p-3">
        <TiGroup size={20} />
        <h1>Partenrs</h1>
      </Link>
      <Link to={"/"} className="flex items-center gap-2 text-grayColor p-3">
        <IoIosSettings size={20} />
        <h1>Setting</h1>
      </Link>
      <Link to={"/"} className="flex items-center gap-2 text-red-500 p-3">
        <AiOutlineLogout size={20} />
        <h1>Logout</h1>
      </Link>
    </div>
  );
}
