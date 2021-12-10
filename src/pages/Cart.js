import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import CartItems from '../components/CartItems/CartItems';
import Modal from '../shared/components/Modal';
import { clearCart } from '../store/cart/cart.slice';
import { displayMoney, calculateTotal } from '../utils/helpers';

function Cart() {
  const { items, user } = useSelector(state => ({
    items: state.cart.items,
    user: state.auth.currentUser,
  }));
  const dispatch = useDispatch();
  const inputRef = useRef();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [couponCode, setCouponCode] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const prices = items.map(product => product.price * product.quantity);

  const handleProceedCheckout = () => {
    if (items.length !== 0 && user) {
      navigate('checkout');
    } else {
      setOpenModal(true);
    }
  };

  return (
    <div className="container mx-auto px-4">
      {openModal && (
        <Modal
          isOpen={openModal}
          width={500}
          renderContent={modal => (
            <>
              <p className="pb-8 text-xl text-medium">
                You must sign in to continue checking out
              </p>
              <div className="flex items-center gap-2">
                <button
                  className="border border-yellow-500 px-4 py-2"
                  onClick={() => {
                    setOpenModal(false);
                    // modal.close();
                  }}
                >
                  Continue shopping
                </button>
                <button
                  onClick={() =>
                    navigate('/login', { state: { from: pathname } })
                  }
                  className="bg-yellow-500 text-white px-4 py-2 "
                >
                  Sign in to chekout
                </button>
              </div>
            </>
          )}
        />
      )}

      <div className="flex flex-col lg:flex-row justify-between pb-16 sm:pb-20 lg:pb-24 pt-10 sm:pt-12">
        <div className="lg:w-3/5 overflow-y-scroll px-2 h-464">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl pb-3 text-center sm:text-left">
              Cart Items &nbsp;
              <span className="text-sm">({items.length} items)</span>
            </h3>
            <button
              className="border border-gray-300 px-2 py-1 cursor-pointer hover:bg-gray-100 text-gray-500"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>

          {items.length <= 0 && (
            <div className="flex items-center justify-center flex-1 h-1/2">
              <h5 className="text-gray-500">Your basket is empty</h5>
            </div>
          )}

          <CartItems cartItems={items} />
        </div>

        <div className="sm:w-2/3 md:w-full lg:w-1/3 mx-auto lg:mx-0 mt-16 lg:mt-0">
          <div className="bg-gray-100 shadow py-8 px-8">
            <h3 className="text-2xl pb-2 text-center sm:text-left">
              Cart Totals
            </h3>

            <div className="pt-4">
              <p className="pt-1 pb-4">Add Coupon</p>
              <div className="flex justify-between">
                <input
                  type="text"
                  placeholder={`Discount code #NEWYEAR`}
                  className="w-3/5 xl:w-2/3 border border-gray-300 px-4 py-2"
                  ref={inputRef}
                />
                <button
                  className="mr-4 inline-block border border-yellow-500 border-1 text-yellow-500 px-7 py-3 rounded uppercase text-center font-semibold hover:text-white hover:bg-yellow-500"
                  onClick={() => {
                    if (couponCode === true)
                      toast.info("You've applied coupon code once");

                    if (inputRef.current.value === 'NEWYEAR') {
                      setCouponCode(true);
                    }
                  }}
                >
                  Apply
                </button>
              </div>
            </div>

            <div className="mb-12 pt-4">
              <p className="pt-1 pb-2">Cart Total</p>
              <div className="flex justify-between border-b border-gray-200 pb-1">
                <span>Subtotal</span>
                <span>{displayMoney(calculateTotal(prices))}</span>
              </div>

              {couponCode && (
                <div className="flex justify-between border-b border-gray-200 pb-1 pt-2">
                  <span>Coupon applied</span>
                  <span>-{displayMoney(calculateTotal(prices) * 0.2)}</span>
                </div>
              )}

              <div className="flex justify-between pt-3">
                <span>Total</span>
                <span>
                  {couponCode
                    ? displayMoney(calculateTotal(prices, true))
                    : displayMoney(calculateTotal(prices))}
                </span>
              </div>
            </div>

            <button
              className="w-full bg-yellow-500 text-white px-7 py-3 rounded inline-block uppercase text-center font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={items.length === 0}
              onClick={handleProceedCheckout}
            >
              Proceed to chekout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
