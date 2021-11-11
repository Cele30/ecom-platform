import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='container mx-auto px-4'>
      <div className='py-16 md:py-20 lg-py-24 sm:w-2/3 md:w-3/5 lg:w-1/2 xl:w-2/5  mx-auto'>
        <form className='border border-gray-200 rounded shadow py-8 px-10' method='POST'>
          <label className='block pb-3'>Username</label>
          <input type='text' placeholder='Enter your username' className='mb-6 border border-1 border-gray-300 px-3 py-3 w-full rounded' />

          <label className='block pb-3'>Full name</label>
          <input type='text' placeholder='Enter your full name' className='mb-6 border border-1 border-gray-300 px-3 py-3 w-full rounded' />

          <label className='block pb-3'>Email</label>
          <input type='email' placeholder='Enter your email' className='mb-6 border border-1 border-gray-300 px-3 py-3 w-full rounded' />

          <label className='block pb-3'>Password</label>
          <input type='password' placeholder='Enter your password' className='mb-6 border border-1 border-gray-300 px-3 py-3 w-full rounded' />

          <button type='submit' className='w-full bg-yellow-500 text-white px-7 py-3 rounded inline-block uppercase text-center font-semibold tracking-wide'>Login</button>

          <div className='flex flex-col justify-center items-center w-full p-4'>
            <p className='text-md'>Have an account?
              <Link to={'/login'} className='font-bold text-yellow-500'> Log in</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup