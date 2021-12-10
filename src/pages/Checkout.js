import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { initializeApp } from '../store/authentication/authentication.slice';

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const handleChange = event => setPaymentMethod(event.target.name);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center md:items-start pt-10 sm:pt-12 pb-16 sm:pb-20 lg:pb-24 px-2">
        <div className="lg:w-2/3 lg:pr-16 xl:pr-20">
          <div>
            <h1 className="text-5xl mb-2 tracking-tight">Checkout</h1>
            <p className="text-sm text-gray-500">
              To purchase product(s) must fill in the data fields <br /> Please
              fill them carefully. Thank you
            </p>
          </div>

          <div className="pt-8 pb-10">
            <h4 className="font-medium text-xl md:text-2xl text-center sm:text-left">
              Billing Details
            </h4>
            <div className="pt-4 md:pt-5">
              <form>
                <div className="flex justify-between">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="mb-4 sm:mb-5 mr-2 w-full border border-gray-300 rounded px-6 py-3"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="mb-4 sm:mb-5 w-full border border-gray-300 rounded px-6 py-3"
                  />
                </div>

                <div className="flex justify-between">
                  <input
                    type="email"
                    placeholder="E-mail address"
                    className="mb-4 sm:mb-5 mr-2 w-full border border-gray-300 rounded px-6 py-3"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="mb-4 sm:mb-5 w-full border border-gray-300 rounded px-6 py-3"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Address"
                  className="mb-4 sm:mb-5 mr-2 w-full border border-gray-300 rounded px-6 py-3"
                />

                <input
                  type="text"
                  placeholder="Apartmen, Suite, etc"
                  className="mb-4 sm:mb-5 mr-2 w-full border border-gray-300 rounded px-6 py-3"
                />

                <input
                  type="text"
                  placeholder="City"
                  className="mb-4 sm:mb-5 mr-2 w-full border border-gray-300 rounded px-6 py-3"
                />

                <div className="flex justify-between">
                  <input
                    type="email"
                    placeholder="Country/Region"
                    className="mb-4 sm:mb-5 mr-2 w-full border border-gray-300 rounded px-6 py-3"
                  />
                  <input
                    type="text"
                    placeholder="Postcode or ZIP"
                    className="mb-4 sm:mb-5 w-full border border-gray-300 rounded px-6 py-3"
                  />
                </div>
              </form>
            </div>

            <h4 className="font-medium text-xl md:text-2xl text-center sm:text-left pt-8">
              Payment Method
            </h4>
            <div className="pt-4">
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="radio2"
                  type="radio"
                  name="cash"
                  className="hidden"
                  checked={paymentMethod === 'cash'}
                  onChange={handleChange}
                />
                <label
                  htmlFor="radio2"
                  className="flex items-center cursor-pointer text-md"
                >
                  <span className="w-6 h-6 inline-block mr-2 rounded-full border border-gray-500 flex-no-shrink"></span>
                  Cash on Delivery
                </label>
              </div>
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="radio1"
                  type="radio"
                  name="card"
                  className="hidden"
                  checked={paymentMethod === 'card'}
                  onChange={handleChange}
                />
                <label
                  htmlFor="radio1"
                  className="flex items-center cursor-pointer text-md"
                >
                  <span className="w-6 h-6 inline-block mr-2 rounded-full border border-gray-500 flex-no-shrink"></span>
                  Debit/Credit Card
                </label>
              </div>
            </div>

            {paymentMethod === 'card' && (
              <div className="pt-4 md:pt-5">
                <form>
                  <input
                    type="text"
                    placeholder="Enter Card Number"
                    className="mb-4 sm:mb-5 mr-2 w-full border border-gray-300 rounded px-6 py-3"
                  />

                  <div className="flex justify-between">
                    <input
                      type="month"
                      placeholder="Valid Date"
                      className="mb-4 sm:mb-5 mr-2 w-full border border-gray-300 rounded px-6 py-3"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="mb-4 sm:mb-5 w-full border border-gray-300 rounded px-6 py-3"
                    />
                  </div>
                </form>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 sm:pt-8">
              <Link
                to="/cart"
                className="flex items-center mb-3 sm:mb-0 text-sm"
              >
                <FaAngleLeft className="text-lg pr-2" />
                Return to cart
              </Link>
              <button className="mr-4 inline-block border border-yellow-500 border-1 text-white bg-yellow-500 px-7 py-3 rounded uppercase text-center font-semibold">
                Pay $200
              </button>
            </div>
          </div>
        </div>

        <div className="sm:w-2/3 md:w-1/2 lg:w-1/3 bg-gray-100 mt-8 lg:mt-0 shadow-xs">
          <div className="p-8">
            <h3 className="text-2xl pb-3 text-center sm:text-left">
              Your order
            </h3>

            <div className="mt-5 mb-8">
              <div className="flex items-center mb-6 group">
                <div className="w-20 h-20">
                  <img
                    src="/assets/images/backpack-03-1.png"
                    alt="product"
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                <div className="flex flex-col gap-1 px-2 mr-auto">
                  <h1 className="font-medium">Jeans with sequins</h1>
                  <div className="flex gap-4 items-center">
                    <div className="flex items-center">
                      <span className="text-gray-400 text-xs mr-1">Size</span>
                      <h5 className="text-xs text-black">28mm</h5>
                    </div>

                    <div className="flex items-center">
                      <span className="text-gray-400 text-xs mr-1">Color</span>
                      <h5 className="text-xs text-black">Blue</h5>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <p className="mr-2 font-bold text-xl">$39.00</p>
                    <span className="text-gray-500 text-md">x 01</span>
                  </div>
                </div>

                <div className="hidden group-hover:block cursor-pointer p-2 hover:bg-gray-200">
                  <FaTrash />
                </div>
              </div>
            </div>

            <div className="mb-4 pt-4">
              <p className="pt-1 pb-2">Cart Total</p>
              <div className="flex justify-between border-b border-gray-200 pb-1">
                <span>Subtotal</span>
                <span>$236</span>
              </div>

              <div className="flex justify-between border-b border-gray-200 pb-1 pt-2">
                <span>Coupon applied</span>
                <span>-$36</span>
              </div>

              <div className="flex justify-between pt-3">
                <span>Total</span>
                <span>$200</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
