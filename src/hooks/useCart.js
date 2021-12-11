import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  addToCart as dispatchAddToCart,
} from '../store/cart/cart.slice';

export default function useCart() {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const isItemInCart = id => !!items.find(product => product.productId === id);

  const itemQuantity = id =>
    items.find(product => product.productId === id)?.quantity;

  const addToCart = product => {
    if (isItemInCart(product.productId)) {
      dispatch(removeFromCart(product.productId));
    } else {
      dispatch(dispatchAddToCart(product));
    }
  };

  const buyNow = product => {
    if (isItemInCart(product.productId)) {
      return;
    } else {
      dispatch(dispatchAddToCart(product));
    }
  };

  return { items, isItemInCart, addToCart, itemQuantity, buyNow };
}
