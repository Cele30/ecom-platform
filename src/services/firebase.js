import { firebase } from '../firebase';
import {
  getFirestore,
  collection,
  query,
  where,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  increment,
} from '@firebase/firestore';

const db = getFirestore(firebase);

export const getProductCategories = () => {
  return getDocs(collection(db, 'product-category'));
};

export const getProductsByCategory = selectedProductCategory => {
  return getDocs(
    query(
      collection(db, 'products'),
      where('categoryId', '==', selectedProductCategory)
    )
  );
};

export const getProductByProductId = productId => {
  return getDoc(doc(db, 'products', productId));
};

export const getFeaturedProducts = () => {
  return getDocs(
    query(collection(db, 'products'), where('isFeatured', '==', true))
  );
};

export const createOrder = order => {
  return addDoc(collection(db, 'orders'), order);
};

export const updateQuantityOfItems = items => {
  items.forEach(async item => {
    await updateDoc(doc(db, 'products', item.id), {
      maxQuantity: increment(-item.quantity),
      active: item.maxQuantity - item.quantity === 0 ? false : true,
    });
  });
};

export const getOrdersForUser = userId => {
  return getDocs(
    query(collection(db, 'orders'), where('userId', '==', userId))
  );
};
