import Avatar from "../../Avatar";
import InputSearch from "./InputSearch";
import { IoIosChatboxes } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
export default function Navbar() {
  return (
    <div className="bg-primaryColor w-full py-3 px-5 flex justify-between items-center">
      <InputSearch />
      <div className="flex gap-3 items-center">
        <IoMdNotifications color="white" size={25}/>
        <IoIosChatboxes color="white" size={25}/>
        <Avatar name={"Ahmed Rashad"} width={35} fontSize={13}/>
      </div>
    </div>
  );
}
