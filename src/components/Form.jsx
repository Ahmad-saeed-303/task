import React, { useState } from 'react';

function App() {
  const [inputs, setInputs] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Processing inputs:', inputs);
    // يمكنك إضافة أي معالجة تريدها هنا
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#CAC7C7]">
      <form onSubmit={handleSubmit} className="p-8 w-full max-w-[80%] lg:text-[15px] text-[10px] bg-[#CAC7C7] rounded-md">
        <div className="mb-4 flex items-center flex-col lg:flex-row gap-4">
          <label className="text-gray-700 w-full lg:w-1/3">
            Item Name:
          </label>
          <input
            type="text"
            name="input1"
            value={inputs.input1}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-400 rounded w-full lg:w-2/3 bg-transparent"
            placeholder="Enter Item Name"
          />
        </div>
        <div className="mb-4 flex items-center flex-col lg:flex-row gap-4">
          <label className="text-gray-700 w-full lg:w-1/3">
            Quantity:
          </label>
          <input
            type="text"
            name="input2"
            value={inputs.input2}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-400 rounded w-full lg:w-2/3 bg-transparent"
            placeholder="Enter Quantity"
          />
        </div>
        <div className="mb-4 flex items-center flex-col lg:flex-row gap-4">
          <label className="text-gray-700 w-full lg:w-1/3">
            Item Description:
          </label>
          <input
            type="text"
            name="input3"
            value={inputs.input3}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-400 rounded w-full lg:w-2/3 bg-transparent"
            placeholder="Enter Item Description"
          />
        </div>
        <div className="mb-4 flex items-center flex-col lg:flex-row gap-4">
          <label className="text-gray-700 w-full lg:w-1/3">
            Type:
          </label>
          <select
            name="input4"
            value={inputs.input4}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-400 rounded w-full lg:w-2/3 bg-transparent"
            placeholder='select the type'
          >
            <option value="">Select Type</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
            <option value="type3">Type 3</option>
          </select>
        </div>
        <div className="mb-4 flex items-center flex-col lg:flex-row gap-4 ">
          <label className="text-gray-700 w-full lg:w-1/3">
            Price:
          </label>
          <input
            type="text"
            name="input5"
            value={inputs.input5}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-400 rounded w-full lg:w-2/3 bg-transparent bg-transparent"
            placeholder="Enter Price"
          />
        </div>
        <div className="mb-4 flex items-center flex-col lg:flex-row gap-4">
          <label className="text-gray-700 w-full lg:w-1/3">
            Measure:
          </label>
          <input
            type="text"
            name="input6"
            value={inputs.input6}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-400 rounded w-full lg:w-2/3 bg-transparent"
            placeholder="Enter Measure"
          />
        </div>
        <div className="flex justify-end items-end mt-6 w-full">
        <div className='w-[65%]'> 
          <button type="submit" className="w-full bg-transparent text-orange-500 p-2 border-orange-400 border-[1px] rounded-md hover:bg-orange-400 duration-300">
            ADD Medicine
          </button>

        </div>
        </div>
      </form>
    </div>
  );
}

export default App;
