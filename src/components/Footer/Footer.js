import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <div className='py-16 bg-yellow-500 mt-4'>
        <div className='flex flex-col items-center justify-between w-5/6 mx-auto lg:flex-row'>
          <div className='text-center lg:text-left'>
            <h4 className='font-bold text-white text-xl pb-8'>Contact</h4>
            <ul>
              <li className='pb-2 block'>
                <p className='text-white'>test.email@ecommerce.com</p>
              </li>
              <li className='pb-2 block'>
                <p className='text-white'>0123 456 789</p>
              </li>
              <li className='pb-2 block'>
                <p className='text-white'>E-commerce</p>
              </li>
            </ul>
          </div>

          <div className='py-16 lg:py-0'>
            <Link to='/' className='text-white text-4xl uppercase'>E-commerce</Link>
            <div className='flex items-center justify-center pt-5 lg:justify-start'>
              <Link to='/'>
                <div className='bg-white rounded-full px-2 py-2 flex items-center mr-5'>
                  <FaFacebookF />
                </div>
              </Link>
              <Link to='/'>
                <div className='bg-white rounded-full px-2 py-2 flex items-center mr-5'>
                  <FaTwitter />
                </div>
              </Link>
              <Link to='/'>
                <div className='bg-white rounded-full px-2 py-2 flex items-center mr-5'>
                  <FaInstagram />
                </div>
              </Link>
            </div>
          </div>

          <div className='text-center'>
            <h4 className='font-bold text-white text-xl pb-8'>Link</h4>
          </div>
        </div>
      </div>
      <div className='py-8'>
        <p className='text-base text-center'>
          All rights reserved &copy; 2021 Made by <span className='text-yellow-500'>Kristijan</span>
        </p>
      </div>
    </>
  )
}

export default Footer
