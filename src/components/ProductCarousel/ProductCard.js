import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ title, goto, image }) {
  return (
    <div
      className={`bg-left bg-white ${title && 'sm:bg-right'} ${
        title ? 'bg-contain' : 'bg-cover'
      } border-2 shadow bg-no-repeat h-full w-full`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {title && (
        <div className="py-40 px-5 sm:px-10 md:px-12 xl-px-24 text-center sm:text-left sm:w-5/6 lg-w-3/4 xl-w-2/3">
          <h3 className="font-medium text-3xl sm-text-4xl md-text-5xl lg-text-6xl">
            {title && title.split('.')[0]}
            <br></br>
            {title && title.split('.')[1]}
          </h3>
          {goto && (
            <Link
              to={goto}
              className="mt-8 bg-yellow-500 rounded px-8 py-4 uppercase text-xl inline-block text-white"
            >
              Разгледајте го производот
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductCard;
