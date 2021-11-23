import React from 'react'
import { FaSearch, FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function ProductFeatured({ price, name, productId }) {
  return (
    <div className='w-full'>
      <div className='flex flex-col items-center border border-gray-dark rounde'>
        <div className='w-full relative group'>
          <div className='w-full h-52 bg-center bg-no-repeat bg-contain border-b' style={{ backgroundImage: `url(/assets/images/products/${name.replaceAll(' ', '')}/image-1.png)` }}>
            <span className='absolute top-0 right-0 bg-white px-5 py-1 mt-4 mr-4 rounded-full uppercase font-bold text-green-500'>New</span>
          </div>

          <div className='absolute inset-0 opacity-0 group-hover:opacity-100 flex justify-center items-center gap-4 bg-black bg-opacity-70'>
            <button className='bg-white rounded-full p-3 flex items-center'><FaShoppingBag /></button>
            <Link to={`product/${productId}`} className='bg-white rounded-full p-3 flex items-center'><FaSearch /></Link>
          </div>
        </div>

        <Link to='product/1' className='w-full px-6 py-6 flex items-center justify-between'>
          <h3 className='text-xl text-gray-600'>{name}</h3>
          <span className='font-bold text-xl block pt-1 text-yellow-500'>${price}</span>
        </Link>
      </div>
    </div >
  )
}

export default ProductFeatured
