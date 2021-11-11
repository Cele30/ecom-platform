import React from 'react'
import { Link } from 'react-router-dom'
import Product from './ProductFeatured'

function Featured() {
  return (
    <div className='flex flex-col py-6 mt-4'>
      <div className='mb-8 mx-auto text-center'>
        <h2 className='font-medium text-xl'>Featured Daily Deals</h2>
        <Link to='/shop' className='border border-1 bg-gray-500 text-white mx-2 mt-2 inline-block rounded px-12 py-1 uppercase'>Shop all deals</Link>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default Featured
