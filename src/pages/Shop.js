import React from 'react'
import Filters from '../components/Filters/Filters'
import Footer from '../components/Footer/Footer'
import Toolbar from '../components/Navigation/Toolbar'
import ProductList from '../components/Product/ProductList'

function Shop() {
  return (
    <div>
      <Toolbar />
      <Filters />
      <ProductList />
      <Footer />
    </div>
  )
}

export default Shop
