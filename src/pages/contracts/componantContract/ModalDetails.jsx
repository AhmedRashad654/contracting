import { MdOutlineAppRegistration } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineAttachment } from "react-icons/md";
import { FaFileCircleQuestion } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
export default function ModalDetails() {
  return (
    <div className="absolute top-5 left-0 flex flex-col bg-white z-20 rounded-lg border border-gray-300">
      <div className="flex gap-1 items-center hover:bg-blue-300 p-2 text-[0.8rem] border-b border-gray-300 hover:text-blue-700">
        <MdOutlineAppRegistration size={18} />
        <p>Open Estimator</p>
      </div>
      <div className="flex gap-1 items-center  p-2 text-[0.8rem] border-b border-gray-300 hover:bg-blue-300 hover:text-blue-700">
        <FaUserFriends size={18} />
        <p>Assign to Subcontractor</p>
      </div>
      <div className="flex gap-1 items-center  p-2 text-[0.8rem] border-b border-gray-300 hover:bg-blue-300 hover:text-blue-700">
        <FaFileCircleQuestion size={18} />
        <p>Create Quotation</p>
      </div>
      <div className="flex gap-1 items-center  p-2 text-[0.8rem] border-b border-gray-300 hover:bg-blue-300 hover:text-blue-700">
        <MdOutlineAttachment size={18} />
        <p>Attach Document</p>
      </div>
      <div className="flex gap-1 items-center  p-2 text-[0.8rem] border-b border-gray-300 text-red-700">
        <MdDelete size={18} />
        <p>Delete</p>
      </div>
    </div>
  );
}
