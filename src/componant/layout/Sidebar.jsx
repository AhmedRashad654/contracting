import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-5 bg-gray-200 min-h-screen">
      <Link to={"/"}>Projects</Link>
      <Link to={"/contracts"}>Contracts</Link>
    </div>
  );
}
