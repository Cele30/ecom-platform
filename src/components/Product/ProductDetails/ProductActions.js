import React, { useState } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addQtyToItem, minusQtyFromItem } from '../../../store/cart/cart.slice';
import useCart from '../../../hooks/useCart';

function ProductActions({ product }) {
  const { addToCart, isItemInCart, itemQuantity } = useCart();

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="flex flex-col jusitfy-between">
      <div className="flex jusitfy-between pb-4">
        <div className="w-1/3">
          <p>Color</p>
        </div>
        <div className="w-2/3 flex items-center">
          <div className="px-2 py-2 mr-2 rounded-full bg-red-500 cursor-pointer border-2 border-transparent hover:border-black"></div>
          <div className="px-2 py-2 mr-2 rounded-full bg-black cursor-pointer border-2 border-transparent hover:border-black"></div>
          <div className="px-2 py-2 mr-2 rounded-full bg-green-500 cursor-pointer border-2 border-transparent hover:border-black"></div>
          <div className="px-2 py-2 mr-2 rounded-full bg-blue-400 cursor-pointer border-2 border-transparent hover:border-black"></div>
        </div>
      </div>

      <div className="flex items-center justify-between pb-8">
        <div className="w-1/3">
          <p>Quantinty</p>
        </div>
        <div className="w-2/3 flex">
          <input
            type="number"
            className="w-16 text-center px-2 py-2 border border-1 border-gray-300 appearance-none"
            readOnly
            value={itemQuantity(product.productId) || quantity}
            min="1"
          />
          <div className="flex flex-col">
            <span
              className="select-none px-1 bg-white border border-1-0 border-gray-300 flex-1 rounede-tr cursor-pointer flex items-center"
              onClick={() => {
                setQuantity(quantity + 1);
                isItemInCart(product.productId) &&
                  dispatch(
                    addQtyToItem({ id: product.productId, quantity: 1 })
                  );
              }}
            >
              <FaAngleUp className="select-none text-sm pointer-events-none text-yellow-500" />
            </span>
            <span
              className="select-none px-1 bg-white border border-1-0 border-gray-300 flex-1 rounede-tr cursor-pointer flex items-center"
              onClick={() => {
                setQuantity(quantity - 1);
                isItemInCart(product.productId) &&
                  dispatch(
                    minusQtyFromItem({ id: product.productId, quantity: 1 })
                  );
              }}
            >
              <FaAngleDown className="select-none text-sm pointer-events-none text-yellow-500" />
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <button
          className="select-none mr-4 inline-block border border-yellow-500 border-1 text-yellow-500 px-7 py-3 rounded uppercase text-center font-semibold"
          onClick={handleAddToCart}
        >
          {' '}
          {isItemInCart(product.productId) ? 'Remove From Cart' : 'Add to Cart'}
        </button>

        <Link
          to="/cart/checkout"
          className="select-none bg-yellow-500 text-white px-7 py-3 rounded inline-block uppercase text-center font-semibold"
        >
          Buy now
        </Link>
      </div>
    </div>
  );
}

export default ProductActions;
