import React from 'react';
import ProductCard from './ProductCard';
import { Carousel } from 'react-responsive-carousel';

function ProductCarousel() {
  return (
    <Carousel autoPlay interval={5000} infiniteLoop showThumbs={false}>
      <ProductCard
        title="Постигнувајте нови цели. Најдобрите патики за трчање"
        goto="product/wExKBtLYnPkx9Uo9gk00"
        image="/assets/images/products/AdidasRacerTR21/image-1.png"
      />
      <ProductCard image="/assets/images/pojmanemam.jpg" />
      <ProductCard image="/assets/images/specialoffer.png" />
    </Carousel>
  );
}

export default ProductCarousel;
