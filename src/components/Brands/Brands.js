import React from 'react'

function Brands() {
  return (
    <div>
      <h4 className='text-xl uppercase text-center'>trending brands</h4>
      <div className='grid grid-cols-2 gap-5 pt-8'>
        <img src='/assets/images/brand1.jpg' alt='brand' className='h-24 w-full mb-8' />
        <img src='/assets/images/brand2.png' alt='brand' className='h-24 w-full mb-8' />
        <img src='/assets/images/brand3.png' alt='brand' className='h-24 w-full mb-8' />
        <img src='/assets/images/brand4.png' alt='brand' className='h-24 w-full mb-8' />
      </div>
    </div>
  )
}

export default Brands
