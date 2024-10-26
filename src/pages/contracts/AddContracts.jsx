import { Outlet } from "react-router-dom";
import AddContractSteps from '../../componant/addContractSteps';
import Header from "../../componant/layout/Header";

export default function AddContracts() {
  return (
    <div className="p-5 flex flex-col gap-5">
      <Header first={'Contract'} second={'addContract'}/>
      <div>
       <AddContractSteps />
      </div>
      <Outlet />
    </div>
  );
}
