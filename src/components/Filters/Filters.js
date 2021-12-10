import React from 'react';
import { FaFilter, FaThList, FaTh } from 'react-icons/fa';

function Filters() {
  return (
    <div className="container mx-auto px-4">
      <div className="py-10 flex flex-col sm:flex-row justify-between">
        <div className="flex items-center justify-start">
          <button className="flex items-center bg-white border border-gray-300 px-4 py-2 mr-2">
            <FaFilter className="mr-2" />
            Filters
          </button>

          {/* <div className='flex items-center border border-gray-300 px-4 py-3 rounded'>
            <button className='cursor-pointer'><FaThList /> </button>
            <div className='w-px h-4 mx-2 bg-gray-500'></div>
            <button className='cursor-pointer'><FaTh /></button>
          </div> */}
        </div>

        <div className="flex items-center justify-start  sm:justify-end mt-6 sm:mt-0 w-80">
          <span className="mr-2 inline-block">Sort by:</span>
          <select className="w-2/3 border border-gray-300 px-4 py-2 text-gray-500">
            <option>Best Match</option>
            <option>Price: Low - High</option>
            <option>Price: High - Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;
