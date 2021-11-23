import React from 'react'

function ProductDescription({ description }) {
  return (
    <div className='py-8'>
      <div className='flex flex-col'>
        <span className='text-center py-5 px-10 border-t-2 border-yellow-500 font-bold'>Description</span>

        <div className='bg-gray-light py-5 lg:py-2'>
          <div className='w-5/6 mx-auto text-center md:text-left'>
            <div className='text-base'>
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription
