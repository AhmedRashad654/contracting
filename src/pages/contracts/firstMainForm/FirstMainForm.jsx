import { useNavigate } from 'react-router-dom';

function ContractForm() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto p-4 md:p-8">
      <form className="flex flex-col gap-6 bg-white p-4 md:p-8">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

          <div className="flex flex-col md:flex-row items-left md:items-center gap-4">
            <div className=' flex gap-2'>
              <input type="checkbox" id="includeTax" />
              <label htmlFor="includeTax" className="text-gray-700 lg:w-32 font-medium">Include Tax</label>
            </div>
            <div className='w-full'>
             <input type="text" placeholder="Tax Value" className="input-field w-full" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-left md:items-center gap-4">
            <div className=' flex gap-2'>
            <input type="checkbox" id="downPayment" />
            <label htmlFor="downPayment" className="text-gray-700 lg:w-32 font-medium">Down Payment</label>
           </div>
            <div className='w-full'>
            <input type="text" placeholder="Down Payment Value" className="input-field w-full" />
            </div>
          </div>
       </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: 'Contract Type', required: true },
            { label: 'Project', required: true },
            { label: 'Partner', required: true },
            { label: 'Consultant', required: true },
            { label: 'Start Date', type: 'date' },
            { label: 'Type of Progress', required: true },
            { label: 'End Date', type: 'date' },
            { label: 'Status', required: true }
          ].map((field, index) => (
            <div key={index}>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
              {field.type === 'date' ? (
                <input type="date" className="input-field w-full" />
              ) : (
                <select className="input-field w-full">
                  <option value="">Select</option>
                </select>
              )}
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2">
          <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
          <textarea placeholder="Enter description" className="input-field w-full h-24"></textarea>
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <button
            type="button"
            className="bg-gray-200 text-gray-600 px-6 py-2 rounded-lg hover:bg-gray-300 transition-all duration-300"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            type="submit"
            onClick={()=>navigate('/contract/addContract/BOQ')}
            className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            next
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContractForm;
