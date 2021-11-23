import { useEffect, useState } from 'react'
import { getFeaturedProducts } from '../services/firebase'
import useDidMount from './useDidMount'

export default function useFeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const didMount = useDidMount(true)

  const fetchFeaturedProducts = async () => {
    try {
      console.log('fetch featured product')
      setLoading(true)
      setError('')

      const querySnapshot = await getFeaturedProducts()

      if (querySnapshot.empty) {
        if (didMount) {
          setLoading(false)
          setError('No featured products found');
        }
      } else {
        if (didMount) {
          setFeaturedProducts(querySnapshot.docs.map(doc => doc.data()))
          setLoading(false)
        }
      }
    } catch (error) {
      setLoading(false)
      setError('Failed to fetch featured products');
    }
  }

  useEffect(() => {
    if (featuredProducts.length === 0 && didMount) {
      fetchFeaturedProducts()
    }
  }, [])

  return { featuredProducts, loading, error }
}