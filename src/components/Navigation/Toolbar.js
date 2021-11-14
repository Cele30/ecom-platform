import React from 'react'
import { FaSearch, FaThLarge, FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import NavigationItems from './NavigationItems/NavigationItems'

function Toolbar({ openSideDrawer }) {
  return (
    <header className='w-full bg-white md:mt-4'>
      <div className='container mx-auto px-4 h-full'>
        <div className='flex items-center justify-between h-full'>
          <FaThLarge className='sm:hidden mr-12' onClick={() => openSideDrawer(true)} />

          <div className='mr-2'>
            <Link to='/'>
              <img src='/assets/images/logo.jpg' alt='logo' className='object-contain w-32' />
            </Link>
          </div>


          <nav className='mr-6 flex-grow hidden sm:block'>
            <NavigationItems />
          </nav>


          <div className="flex items-center hidden md:flex">
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="button" className="p-1 focus:outline-none focus:shadow-outline">
                  <FaSearch />
                </button>
              </span>
              <input type="search" className="py-2 text-sm border rounded pl-10 focus:outline-none focus:text-gray-900" placeholder="Search product..." autoComplete="off" />
            </div>
          </div>


          <Link to='/cart' className='py-3 px-4 hover:bg-gray-200 lg:mr-8'><FaShoppingBag /></Link>


          <div className='flex items-center justify-between gap-8 hidden lg:flex '>
            <div className='flex items-center gap-4'>
              <Link to='signup' className='bg-black text-white  text-sm font-semibold inline-block px-4 py-1.5'>Sign Up</Link>
              <Link to='login' className='text-gray-500 border border-gray-300 text-sm inline-block px-4 py-1.5 hover:bg-gray-100'>Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Toolbar


// eslint-disable-next-line no-lone-blocks
{/* <div className='flex flex-col py-6 text-2xl text-gray-700'>
<div className='flex justify-between items-center'>
  <NavigationItems />
  <FaThLarge onClick={openSideDrawer} className='lg:hidden' />
  <h1>Shop</h1>
  <FaShoppingCart />
</div>
<div className='flex items-center border pr-2 mt-4 bg-gray-100'>
  <input type='text' placeholder='Search for brand' className='w-full bg-gray-100' />
  <FaSearch />
</div>
</div> */}