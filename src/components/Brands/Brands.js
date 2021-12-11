import React from 'react';

function Brands() {
  return (
    <div className="pt-16 sm:pt-20 pb-5 sm:pb-12 border-b border-gray-200">
      <h4 className="text-xl uppercase text-center font-semibold">Брендови</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 pt-8">
        <img
          src="/assets/images/brand-01.png"
          alt="brand"
          className="h-24 w-full mb-8 object-cover sm:mb-10 lg-mb-0"
        />
        <img
          src="/assets/images/brand-02.png"
          alt="brand"
          className="h-24 w-full mb-8 object-cover sm:mb-10 lg-mb-0"
        />
        <img
          src="/assets/images/brand-03.png"
          alt="brand"
          className="h-24 w-full mb-8 object-cover sm:mb-10 lg-mb-0"
        />
        <img
          src="/assets/images/brand-04.png"
          alt="brand"
          className="h-24 w-full mb-8 object-cover sm:mb-10 lg-mb-0"
        />
        <img
          src="/assets/images/brand-05.png"
          alt="brand"
          className="h-24 w-full mb-8 object-cover sm:mb-10 lg-mb-0"
        />
        <img
          src="/assets/images/brand-06.png"
          alt="brand"
          className="h-24 w-full mb-8 object-cover sm:mb-10 lg-mb-0"
        />
      </div>
    </div>
  );
}

export default Brands;
