import React from 'react'
import { Link } from 'react-router-dom'

function ProductFeatured() {
  return (
    <li className="w-1/2 mb-4 inline-block bg-white px-2 pt-6 border-r-2 border-l-2 shadow-lg w-full">
      <Link to='product'>
        <img className='h-28 w-full object-cover' src='https://cdn2.jomashop.com/media/catalog/product/cache/df24c858758eb768757877f23cd17493/c/o/corum-admiral-cup-chronograph-automatic-white-dial-mens-watch-a75304234-a75304234.jpg?width=300&height=300' alt='watc' />
        <div className="p-4">
          <h1 className="text-gray-900 font-bold text-2xl">Backpack</h1>
          <p className="mt-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet consect</p>
          <div className="flex items-center justify-between mt-3">
            <h1 className="text-gray-700 font-bold text-xl">$150</h1>
            <h1 className='line-through text-gray-500 text-md'>$220</h1>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default ProductFeatured
