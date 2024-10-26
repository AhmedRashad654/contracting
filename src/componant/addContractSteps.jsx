import { MdOutlineNoteAdd } from "react-icons/md";
import { IoListSharp } from "react-icons/io5";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { BiSticker } from "react-icons/bi";

import { TfiLineDotted } from "react-icons/tfi";

function AddContractStepS() {
  return (
    <div className='flex flex-wrap sm:flex-row items-center justify-between gap-16 lg:gap-16'>
          <div className='flex flex-col items-center gap-2'>
              <div className='text-2xl text-white  bg-[#A2A2A2] p-3 rounded-full'>
                  <MdOutlineNoteAdd  />
              </div>
              <p className='text-sm text-[#A2A2A2]'>Add contract</p>
          </div>
          <TfiLineDotted className='text-3xl text-[#A2A2A2] hidden lg:block' />
          <div className='flex flex-col items-center gap-2'>
              <div className='text-2xl text-white  bg-[#A2A2A2] p-3 rounded-full'>
                  <IoListSharp />
              </div>
              <p  className='text-sm text-[#A2A2A2]'>BOG</p>
          </div>
          <TfiLineDotted className='text-3xl text-[#A2A2A2] hidden lg:block' />
          <div className='flex flex-col items-center gap-2'>
                 <div className='text-2xl text-white  bg-[#A2A2A2] p-3 rounded-full'>
                  <FiMinusCircle /> 
                  </div>
              <p  className='text-sm text-[#A2A2A2]'>Deduction</p>
          </div>
          <TfiLineDotted className='text-3xl text-[#A2A2A2] hidden lg:block' />
          <div className='flex flex-col items-center gap-2'>
             <div className='text-2xl text-white  bg-[#A2A2A2] p-3 rounded-full'>
                <FiPlusCircle />
             </div>
              <p  className='text-sm text-[#A2A2A2]'>Addition</p>
          </div>
          <TfiLineDotted className='text-3xl text-[#A2A2A2] hidden lg:block' />
          <div className='flex flex-col items-center gap-2'>
            <div className='text-2xl text-white  bg-[#A2A2A2] p-3 rounded-full'>
                <BiSticker /> 
            </div>      
             <p  className='text-sm text-[#A2A2A2]'>Summary</p>    
        </div>  
    </div>
  )
}

export default AddContractStepS
