import React from 'react'
import { Link } from 'react-router-dom'
import watchImg from '../../assets/images/watch.png'

function ProductCard() {
  return (
    <div className='bg-yellow-500 p-6 mt-4 rounded-2xl relative overflow-hidden text-left'>
      <img src={watchImg} alt='watch' className='absolute -right-32 -top-20 transform rotate-12 scale-60' />
      <h1 className='text-white uppercase text-3xl mb-2  leading-8 tracking-tight'>hot sale <br />  <span className='font-bold text-5xl'>40% off</span></h1>
      <Link to='/products' className='bg-white text-yellow-800 px-6 py-3 inline-block mt-4 mb-1 rounded-full cursor-pointer font-bold'>
        Get now
      </Link>
    </div>
  )
}

export default ProductCard
