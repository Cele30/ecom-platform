import React from 'react'
import { Link } from 'react-router-dom'
// import { FaPlus, FaMinus, FaTimes } from 'react-icons/fa'
import CartItems from '../components/CartItems/CartItems'

function Cart() {
  return (
    <div className='container mx-auto px-4'>
      <div className='flex flex-col lg:flex-row justify-between pb-16 sm:pb-20 lg:pb-24 pt-10 sm:pt-12'>
        <div className='lg:w-3/5 overflow-y-scroll px-2 h-464'>
          <div className='flex items-center justify-between'>
            <h3 className='text-2xl pb-3 text-center sm:text-left'>Cart Items &nbsp;
              <span className='text-sm'>(2 items)</span>
            </h3>
            <button className='border border-gray-300 px-2 py-1 cursor-pointer hover:bg-gray-100 text-gray-500'>Clear Cart</button>
          </div>

          <CartItems />
        </div>

        <div className='sm:w-2/3 md:w-full lg:w-1/3 mx-auto lg:mx-0 mt-16 lg:mt-0'>
          <div className='bg-gray-100 shadow py-8 px-8'>
            <h3 className='text-2xl pb-2 text-center sm:text-left'>Cart Totals</h3>

            <div className='pt-4'>
              <p className='pt-1 pb-4'>Add Coupon</p>
              <div className='flex justify-between'>
                <input type='text' placeholder='Discount code' className='w-3/5 xl:w-2/3 border border-gray-300 px-4 py-2' />
                <button className='mr-4 inline-block border border-yellow-500 border-1 text-yellow-500 px-7 py-3 rounded uppercase text-center font-semibold hover:text-white hover:bg-yellow-500'>Apply</button>
              </div>
            </div>

            <div className='mb-12 pt-4'>
              <p className='pt-1 pb-2'>Cart Total</p>
              <div className='flex justify-between border-b border-gray-200 pb-1'>
                <span>Subtotal</span>
                <span>$236</span>
              </div>

              <div className='flex justify-between border-b border-gray-200 pb-1 pt-2'>
                <span>Coupon applied</span>
                <span>-$36</span>
              </div>

              <div className='flex justify-between pt-3'>
                <span>Total</span>
                <span>$200</span>
              </div>
            </div>

            <Link to='checkout' className='w-full bg-yellow-500 text-white px-7 py-3 rounded inline-block uppercase text-center font-semibold'>Proceed to chekout</Link>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Cart
