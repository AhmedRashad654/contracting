import { Outlet } from "react-router-dom";
import AddContractSteps from '../../componant/addContractSteps';
import Header from "../../componant/layout/Header";

export default function AddContracts() {
  return (
    <div>
      <Header first={'Contract'} second={'addContract'}/>
      <div className="md:max-w-7xl mx-auto p-4 md:p-8">
       <AddContractSteps />
      </div>
      <Outlet />
    </div>
  );
}
