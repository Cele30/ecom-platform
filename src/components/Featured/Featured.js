import React from 'react'
import { Link } from 'react-router-dom'
import useFeaturedProducts from '../../hooks/useFeaturedProducts'
import ProductFeatured from './ProductFeatured'

function Featured() {
  const { featuredProducts, loading, error } = useFeaturedProducts()

  return (
    <div className='flex flex-col py-6 mt-4'>
      <div className='mb-8 mx-auto text-center'>
        <h2 className='font-medium text-xl'>Featured Daily Deals</h2>
        <Link to='/shop' className='border border-1 bg-gray-500 text-white mx-2 mt-2 inline-block rounded px-12 py-1 uppercase'>Shop all deals</Link>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
        {loading && (
          <div>
            <h3 className='text-center'>Loading Product...</h3>
          </div>
        )}

        {error && <p>{error}</p>}

        {(featuredProducts && !loading) && (
          featuredProducts.map((product) => (
            <ProductFeatured key={product.productId} {...product} />
          ))
        )}
      </div>
    </div>
  )
}

export default Featured
