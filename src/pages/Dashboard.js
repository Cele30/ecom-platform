import React, { useState } from 'react'
import Featured from '../components/Featured/Featured'
import Brands from '../components/Brands/Brands'
import SideDrawer from '../components/Navigation/SideDrawer'

import Toolbar from '../components/Navigation/Toolbar'
import ProductCarousel from '../components/ProductCarousel/ProductCarousel'
import Footer from '../components/Footer/Footer'

function Dashboard() {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false)

  const openSideDrawer = () => setIsSideDrawerOpen(true)
  const closeSideDrawer = () => setIsSideDrawerOpen(false)

  return (
    <div className='container mx-auto px-4'>
      <SideDrawer isSideDrawerOpen={isSideDrawerOpen} closeSideDrawer={closeSideDrawer} />
      <Toolbar openSideDrawer={openSideDrawer} />
      <ProductCarousel />
      <Featured />
      <Brands />
      <Footer />
    </div>
  )
}

export default Dashboard
