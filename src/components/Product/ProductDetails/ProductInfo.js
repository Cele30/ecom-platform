import React from 'react'
import { FaStar } from 'react-icons/fa'

function ProductInfo() {
  return (
    <div className='border-b border-gray mb-8 pt-8'>
      <div className='flex items-center'>
        <h2 className='text-3xl'>Woodie Blake</h2>
        <p className='bg-yellow-500 rounded-full ml-8 px-6 py-2 font-bold text-white uppercase text-sm'>20% off</p>
      </div>

      <div className='flex items-center pt-3'>
        <span className='text-2xl'>$110.0</span>
        <span className='text-xl line-through pl-5 text-gray-500'>$135.0</span>
      </div>

      <div className='flex items-center pt-3'>
        <div className='flex items-center'>
          <FaStar className='text-yellow-500' />
          <FaStar className='text-yellow-500' />
          <FaStar className='text-yellow-500' />
          <FaStar className='text-yellow-500' />
          <FaStar className='text-yellow-500' />
        </div>
        <span className='text-sm ml-2'>(45)</span>
      </div>


      <div className='flex items-center pt-3 pb-8'>
        <p>Availabilty:</p>
        <p className='text-green-500 pl-3'>In Stock</p>
      </div>
    </div>
  )
}

export default ProductInfo
