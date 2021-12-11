import React from 'react';
import { FaStar } from 'react-icons/fa';

function ProductInfo({
  name,
  price,
  active,
  maxQuantity,
  percentage,
  discountPrice,
}) {
  return (
    <div className="border-b border-gray mb-8 pt-8">
      <div className="flex items-center">
        <h2 className="text-3xl">{name}</h2>
        {percentage && (
          <p className="bg-yellow-500 rounded-full ml-8 px-6 py-2 font-bold text-white uppercase text-sm">
            {percentage}% off
          </p>
        )}
      </div>

      <div className="flex items-center pt-3">
        {discountPrice && <span className="text-2xl">${discountPrice}</span>}
        <span
          className={`text-xl ${
            discountPrice && 'line-through pl-5'
          } text-gray-500`}
        >
          ${price}
        </span>
      </div>

      <div className="flex items-center pt-3">
        <div className="flex items-center">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
        </div>
        <span className="text-sm ml-2">(45)</span>
      </div>

      <div className="flex items-center pt-3">
        <p>Достапност:</p>
        <p className={`${active ? 'text-green-500' : 'text-red-500'} pl-3`}>
          {active ? 'Има на залиха' : 'Нема на залиха'}
        </p>
      </div>

      <div className="flex items-center pt-3 pb-8">
        <p>Количина на залиха:</p>
        <p className={`pl-3`}>{maxQuantity}</p>
      </div>
    </div>
  );
}

export default ProductInfo;
