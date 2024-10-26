import { FaCircle } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import ButtonLast from "./ButtonLast";
import ModalDetails from "./ModalDetails";
import { useState } from "react";
export default function TableAllContract() {
  const [openModalDetails, setOpenModalDetails] = useState(false);
  const [idContract, setIdContract] = useState(null);
  return (
    <div>
      <div className="scrollbar max-h-[50vh] overflow-auto">
        <table>
          <thead>
            <tr className="bg-primaryColor text-white">
              <th> Code</th>
              <th> Contract</th>
              <th> Partner</th>
              <th> Status</th>
              <th> Details</th>
            </tr>
          </thead>
          <tbody>
            {[1, 1, 1, 1, 1, 1, 1].map((employee, i) => (
              <tr key={i} className="cursor-pointer">
                <td> #64756</td>
                <td className="text-blue-600"> email.com</td>
                <td className="text-blue-600">01025004855</td>
                <td className="flex justify-center">
                  <div className="flex items-center  gap-2 bg-green-200 text-[0.8rem] text-green-800 w-fit py-[1px] px-2 rounded-md">
                    <FaCircle />
                    <p>Approved</p>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center relative">
                    {openModalDetails && i === idContract && <ModalDetails />}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setIdContract(i);
                        setOpenModalDetails((e) => !e);
                      }}
                    >
                      <HiOutlineDotsVertical />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ButtonLast />
    </div>
  );
}
