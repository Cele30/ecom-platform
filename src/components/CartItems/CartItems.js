import React from 'react';
import CartItem from './CartItem';

function CartItems({ cartItems }) {
  return (
    <div className="mt-4">
      {cartItems.map(item => (
        <CartItem key={item.productId} item={item} />
      ))}
    </div>
  );
}

export default CartItems;
