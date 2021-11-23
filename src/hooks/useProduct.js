import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProductByProductId } from "../services/firebase";

export const useProduct = (productId) => {
  const storeProduct = useSelector(state => state.products.products.find(product => product.productId === productId))

  const [product, setProduct] = useState(storeProduct)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        if (!product) {
          console.log('fetch product')
          setLoading(true)
          const doc = await getProductByProductId(productId)

          if (doc.exists) {
            const data = doc.data()
            setProduct(data)
            setLoading(false)
          } else {
            setError('Product not found')
          }
        }
      } catch (error) {
        setLoading(false)
        setError(error.message || 'Something went wrong')
      }
    })()
  }, [product, productId])

  return { product, loading, error }
}