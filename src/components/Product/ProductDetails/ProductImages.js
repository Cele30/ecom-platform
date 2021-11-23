import React, { useState } from 'react'

function ProductImages({ name }) {
  const [selectedImage, setSelectedImage] = useState(1)

  return (
    <div className='flex flex-col-reverse justify-between lg:w-1/2 sm:flex-row lg:flex-low px-5'>
      <div className='flex flex-row sm:pl-5 md:pl-4 lg:pl-0 lg:pr-2 xl:pr-3 sm:flex-col'>
        <div className='w-28 relative pb-5 mr-2' onClick={() => setSelectedImage(1)}>
          <div className='border border-gray rounded w-full'>
            <img className='object-cover cursor-pointer' alt='product' src={`/assets/images/products/${name.replaceAll(' ', '')}/image-1.png`} />
          </div>
        </div>

        <div className='w-28 relative pb-5 mr-2' onClick={() => setSelectedImage(2)}>
          <div className='border border-gray rounded w-full'>
            <img className='object-cover cursor-pointer' alt='product' src={`/assets/images/products/${name.replaceAll(' ', '')}/image-2.png`} />
          </div>
        </div>

        <div className='w-28 relative pb-5 mr-2' onClick={() => setSelectedImage(3)}>
          <div className='border border-gray rounded w-full'>
            <img className='object-cover cursor-pointer' alt='product' src={`/assets/images/products/${name.replaceAll(' ', '')}/image-3.png`} />
          </div>
        </div>
      </div>

      <div className='pb-5 sm:pb-0 w-full'>
        <div className='border rounded'>
          <img className='object-cover' alt='product' src={`/assets/images/products/${name.replaceAll(' ', '')}/image-${selectedImage}.png`} />
        </div>
      </div>
    </div>
  )
}

export default ProductImages
