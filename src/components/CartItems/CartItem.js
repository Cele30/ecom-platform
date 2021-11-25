import React from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  addQtyToItem,
  minusQtyFromItem,
  removeFromCart,
} from "../../store/cart/cart.slice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center border mb-4">
      <div className="w-8 h-20 flex flex-col items-center">
        <button
          className="w-8 h-full p-2 font-bold border flex items-center justify-center text-gray-700 hover:bg-gray-200"
          onClick={() =>
            dispatch(addQtyToItem({ id: item.productId, quantity: 1 }))
          }
        >
          <FaPlus />
        </button>
        <button
          className="w-8 h-full p-2 font-bold border flex items-center justify-center text-gray-700 hover:bg-gray-200"
          onClick={() =>
            dispatch(minusQtyFromItem({ id: item.productId, quantity: 1 }))
          }
        >
          <FaMinus />
        </button>
      </div>

      <div className="grid grid-flow-col w-full items-center px-3">
        <div className="w-20 h-20 mx-auto">
          <img
            src={`/assets/images/products/${item.name.replaceAll(
              " ",
              ""
            )}/image-1.png`}
            alt="product"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="">
          <Link to={`/product/${item.productId}`}>
            <h4 className="underline my-2">{item.name}</h4>
          </Link>
          <div className="grid grid-flow-col auto-cols-max gap-8">
            <div>
              <span className="text-gray-500 block text-xs mb-1">Quantity</span>
              <h5 className="text-xs text-black font-bold">{item.quantity}</h5>
            </div>

            <div>
              <span className="text-gray-500 block text-xs mb-1">Size</span>
              <h5 className="text-xs text-black font-bold">28mm</h5>
            </div>

            <div>
              <span className="text-gray-500 block text-xs mb-1">Color</span>
              <div className="w-3 h-3 rounded-full bg-black"></div>
            </div>
          </div>
        </div>
        <div className="text-center text-xl">${item.price * item.quantity}</div>
        <button
          className="ml-auto border p-4 text-gray-700 hover:bg-gray-200"
          onClick={() => dispatch(removeFromCart(item.productId))}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
