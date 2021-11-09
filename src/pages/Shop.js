import React from 'react'
import Filters from '../components/Filters/Filters'
import ProductList from '../components/Product/ProductList'
import Subscription from '../components/Subscription/Subscription'

function Shop() {
  return (
    <div>
      <Filters />
      <ProductList />
      <Subscription />
    </div>
  )
}

export default Shop
