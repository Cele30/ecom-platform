import React from 'react'
import ProductActions from './ProductActions'
import ProductDescription from './ProductDescription'
import ProductImages from './ProductImages'
import ProductInfo from './ProductInfo'

function ProductDetails() {
  return (
    <div className='container mx-auto px-4'>
      <div className='pt-16 pb-24 flex flex-col justify-between'>
        <ProductImages />
        <ProductInfo />
        <ProductActions />
        <ProductDescription />
      </div>
    </div>
  )
}

export default ProductDetails
