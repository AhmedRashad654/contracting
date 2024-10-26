import { CiSearch } from "react-icons/ci";
export default function InputSearch() {
  return (
    <div className="relative text-grayColor w-[50%]  md:w-[30%]">
      <input
        type="text"
        placeholder="Search"
        className="rounded-full p-2 placeholder:text-[0.8rem] bg-bgInput w-full outline-none"
      />
      <div className="absolute top-3 right-3">
        <CiSearch size={15}/>
      </div>
    </div>
  );
}
