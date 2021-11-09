import React from 'react'

function Subscription() {
  return (
    <div className='container mx-auto px-4 mt-20 mb-20'>
      <div className='bg-yellow-500 py-16 text-center'>
        <h3 className='text-3xl text-white'>Let's keep in touch</h3>
        <p className='text-white text-lg pt-3 px-6'>Join our list and save 15% off your first order.</p>
        <form className='pt-10'>
          <div className='w-5/6 mx-auto flex flex-col justify-center items-center'>
            <input type='email' placeholder='enter your email' className='text-sm text-white border-white uppercase w-full border bg-transparent px-6 py-3 rounded placeholder-white' />
            <button type='button' className='inline-block rounded px-6 py-3 mt-4 w-full bg-red-600 text-white uppercase'>Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Subscription
