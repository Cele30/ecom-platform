import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='container mx-auto px-4'>
      <div className='pt-8 pb-16 md:pb-20 lg:pb-24 flex flex-col lg:flex-row justify-between'>
        <div className='w-full lg:w-3/8 xl:w-1/3 mx-auto px-8 xl:px-8 border border-gray-200 shadow text-center lg:text-left py-10 mb-8 lg:mb-0'>
          <h2 className='text-2xl md:text-4xl'>Quick contact</h2>

          <h4 className='font-semibold text-lg sm-text-xl uppercase pt-8'>Email</h4>
          <p className='text-gray-500'>test@test.com</p>

          <h4 className='font-semibold text-lg sm-text-xl uppercase pt-8'>Phone</h4>
          <p className='text-gray-500'>0123 456 789</p>


          <div className='pt-8'>
            <h4 className='uppercase text-lg sm:text-xl'>Follow us</h4>
            <div className='flex justify-center items-center lg:justify-start pt-3 gap-4'>
              <Link to='/contact' className='p-3 rounded-full bg-yellow-500 block text-white flex items-center'><FaFacebook /></Link>
              <Link to='/contact' className='p-3 rounded-full bg-yellow-500 block text-white flex items-center'><FaTwitter /></Link>
              <Link to='/contact' className='p-3 rounded-full bg-yellow-500 block text-white flex items-center'><FaInstagram /></Link>
            </div>
          </div>
        </div>

        <div className='lg:w-3/5 border border-gray-300 shadow-md px-8 py-10'>
          <form>
            <p className='text-lg pb-8'>Any questions? Contact us through Whatsapp or on our contact form below.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 justify-between mb-5'>
              <div>
                <label className='block mb-2'>Name</label>
                <input type='text' placeholder='Enter your name' className='w-full border border-gray-300 px-4 py-2' />
              </div>
              <div>
                <label className='block mb-2'>Email</label>
                <input type='email' placeholder='Enter your email' className='w-full border border-gray-300 px-4 py-2' />
              </div>
            </div>

            <div className='w-full mb-8'>
              <label className='block mb-2'>Subject</label>
              <input type='text' placeholder='Enter your subject' className='w-full border border-gray-300 px-4 py-2' />
            </div>

            <div className='w-full mb-8'>
              <label className='block mb-2'>Message</label>
              <textarea rows={5} placeholder='Enter your message' className='w-full border border-gray-300 px-4 py-2' />
            </div>

            <button type='submit' className='bg-yellow-500 uppercase inline-block px-7 py-3 rounded text-white'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
