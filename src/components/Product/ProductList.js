import React from 'react'
import ProductItem from './ProductItem'

function ProductList({ products, isLoading }) {

  if (isLoading) {
    return <p className='flex items-center justify-center text-4xl'>Loading...</p>
  }

  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-2'>
        {products && products.map(product => (
          <ProductItem key={product.productId} {...product} />
        ))}
        {/* <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem /> */}
      </div>
    </div>
  )
}

export default ProductList
