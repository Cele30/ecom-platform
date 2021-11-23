import { firebase } from "../firebase";
import { getFirestore, collection, query, where, doc, getDocs, getDoc } from "@firebase/firestore";

const db = getFirestore(firebase)

export const getProductCategories = () => {
  return getDocs(collection(db, 'product-category'))
}

export const getProductsByCategory = (selectedProductCategory) => {
  return getDocs(query(collection(db, 'products'), where('categoryId', '==', selectedProductCategory)))
}

export const getProductByProductId = (productId) => {
  return getDoc(doc(db, 'products', productId))
}

export const getFeaturedProducts = () => {
  return getDocs(query(collection(db, 'products'), where('isFeatured', '==', true)))
}