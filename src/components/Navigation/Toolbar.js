import React from 'react'
import { FaSearch, FaThLarge, FaShoppingCart } from 'react-icons/fa'

function Toolbar({ openSideDrawer }) {
  return (
    <div className='flex flex-col py-6 text-2xl text-gray-700'>
      <div className='flex justify-between items-center'>
        <FaThLarge onClick={openSideDrawer} />
        <h1>Shop</h1>
        <FaShoppingCart />
      </div>
      <div className='flex items-center border pr-2 mt-4 bg-gray-100'>
        <input type='text' placeholder='Search for brand' className='w-full bg-gray-100' />
        <FaSearch />
      </div>
    </div>
  )
}

export default Toolbar
