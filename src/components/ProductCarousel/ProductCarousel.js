import React from 'react'
import ProductCard from './ProductCard'
import { Carousel } from 'react-responsive-carousel'

function ProductCarousel() {
  return (
    <Carousel autoPlay interval={5000} infiniteLoop showThumbs={false} >
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Carousel>
  )
}

export default ProductCarousel
