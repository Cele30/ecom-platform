import React, { useCallback, useEffect } from 'react'
import Filters from '../components/Filters/Filters'
import ProductList from '../components/Product/ProductList'
import Subscription from '../components/Subscription/Subscription'

import { useSelector, useDispatch } from 'react-redux'
import { retrieveProductsByCategory } from '../store/products/products.slice'

function Shop() {
  const { products, selectedProductCategory, loading } = useSelector(state => state.products)
  const dispatch = useDispatch()

  const doesProductsAreAlreadyFetched = products && products.some(p => p.categoryId === selectedProductCategory)

  const initFetch = useCallback(() => {
    if (!doesProductsAreAlreadyFetched)
      dispatch(retrieveProductsByCategory(selectedProductCategory))

  }, [dispatch, doesProductsAreAlreadyFetched, selectedProductCategory])

  useEffect(() => {
    initFetch()
  }, [initFetch])

  const filteredProductsByCategory = products.filter(product => product.categoryId === selectedProductCategory)

  return (
    <div>
      <Filters />
      <ProductList products={filteredProductsByCategory} isLoading={loading} />
      <Subscription />
    </div>
  )
}

export default Shop
