import React from 'react'

function ProductImages() {
  return (
    <div className='flex flex-col-reverse justify-between'>
      <div className='flex flex-row'>
        <div className='w-28 relative pb-5 mr-2'>
          <div className='bg-pink-50  border border-gray rounded w-full'>
            <img className='object-cover cursor-pointer' alt='product' src='/assets/images/backpack-03-1.png' />
          </div>
        </div>

        <div className='w-28 relative pb-5 mr-2'>
          <div className='bg-pink-50 border border-gray rounded w-full'>
            <img className='object-cover cursor-pointer' alt='product' src='/assets/images/backpack-03-1.png' />
          </div>
        </div>

        <div className='w-28 relative pb-5 mr-2'>
          <div className='bg-pink-50 border border-gray rounded w-full'>
            <img className='object-cover cursor-pointer' alt='product' src='/assets/images/backpack-03-1.png' />
          </div>
        </div>
      </div>

      <div className='w-full pb-5'>
        <div className='bg-pink-50 border border-gray rounded '>
          <img className='object-cover cursor-pointer' alt='product' src='/assets/images/backpack-03-1.png' />
        </div>
      </div>
    </div>
  )
}

export default ProductImages
