import React from 'react'
import Product from './ProductFeatured'

function Featured() {
  return (
    <div className='flex flex-col py-6 mt-4'>
      <div className='mb-8 mx-auto text-center'>
        <h2 className='font-medium text-xl'>Featured Daily Deals</h2>
        <button className='border border-1 bg-gray-500 text-white mx-2 mt-1 rounded px-12 py-1 uppercase'>Shop all deals</button>
      </div>

      <div>
        <ul className='grid grid-cols-2 gap-2'>
          <Product />
          <Product />
          <Product />
          <Product />
        </ul>
      </div>
    </div>
  )
}

export default Featured
