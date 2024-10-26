import { Link } from "react-router-dom";
import Header from "../../componant/layout/Header";
import { useState } from "react";
import NotFoundContract from "./componantContract/NotFoundContract";
import TableAllContract from "./componantContract/TableAllContract";

export default function Contracts() {
  const [checkContract] = useState(true);
  return (
    <div className="p-5 flex flex-col gap-5">
      <Header first={"Home"} second={"contract"} />
      <Link
        to={"/contract/addContract"}
        className="p-2 bg-primaryColor rounded-md text-white text-[0.8rem] w-fit"
      >
        + Add Contract
      </Link>
      {checkContract ? <TableAllContract /> : <NotFoundContract />}
    </div>
  );
}
