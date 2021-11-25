import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard() {
  return (
    <div
      className="bg-left bg-white  sm:bg-right bg-contain border-2 shadow bg-no-repeat h-full"
      style={{
        backgroundImage:
          'url(/assets/images/products/NikeAirMonarchIV/image-1.png)',
      }}
    >
      <div className="py-48 px-5 sm:px-10 md:px-12 xl-px-24 text-center sm:text-left sm:w-5/6 lg-w-3/4 xl-w-2/3">
        <h3 className="font-medium text-3xl sm-text-4xl md-text-5xl lg-text-6xl">
          Back to school the stylish way
        </h3>
        <Link
          to="shop"
          className="mt-8 bg-yellow-500 rounded px-8 py-4 uppercase text-xl inline-block text-white"
        >
          Know more
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
