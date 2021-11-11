import React from 'react'
import { FaStar } from 'react-icons/fa'

function ProductItem() {
  return (
    <div className='w-full'>
      <div className='flex flex-col items-center border border-gray-dark rounde'>
        <div className='w-full relative'>
          <div className='w-full h-52 bg-center bg-no-repeat bg-contain bg-pink-50' style={{ backgroundImage: 'url(/assets/images/backpack-03-1.png)' }}>
            <span className='absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full uppercase font-bold text-green-500'>New</span>
          </div>
        </div>

        <div className='w-full px-6 py-6'>
          <h3 className='text-xl text-gray-500'>Cat eye</h3>
          <span className='font-bold text-xl block pt-1'>$75.0</span>
          <span className='pt-4 font-bold text-green-500 block'>In Stock</span>
          <p className='text-gray-500 pt-2 text-sm'>Elyssi sunglasses provides a new way to protect your eyes from the sun’s UV light, because of its polarized lenses.</p>
          <div className='flex items-center pt-3'>
            <div className='flex items-center'>
              <FaStar className='text-yellow-500' />
              <FaStar className='text-yellow-500' />
              <FaStar className='text-yellow-500' />
              <FaStar className='text-yellow-500' />
              <FaStar className='text-yellow-500' />
            </div>
            <p className='text-sm ml-2'>45</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProductItem
