import React from 'react'

function ProductDescription() {
  return (
    <div className='py-8'>
      <div className='flex flex-col'>
        <span className='text-center py-5 px-10 border-t-2 border-yellow-500 font-bold'>Description</span>

        <div className='bg-gray-light py-5 lg:py-2'>
          <div className='w-5/6 mx-auto text-center md:text-left'>
            <div className='text-base'>
              Versatile, comfortable, and chic! Three words that describe Blake by Elyssi.
              This backpack purse is A durable leather backpack with two large compartments and 2
              smaller compartments on the front and back of it so you can carry all your belongings.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription
