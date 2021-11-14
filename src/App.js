import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import Shop from './pages/Shop'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './components/Product/ProductDetails'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Toolbar from './components/Navigation/Toolbar'
import SideDrawer from './components/Navigation/SideDrawer'
import Footer from './components/Footer/Footer'
import Contact from './pages/Contact'
import About from './pages/About'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function App() {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false)

  const openSideDrawer = () => setIsSideDrawerOpen(true)
  const closeSideDrawer = () => setIsSideDrawerOpen(false)

  return (
    <>
      <SideDrawer isSideDrawerOpen={isSideDrawerOpen} closeSideDrawer={closeSideDrawer} />
      <Toolbar openSideDrawer={openSideDrawer} />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product/:id' element={<ProductDetails />} />

        <Route path='/cart' element={<Cart />} />
        <Route path='/cart/checkout' element={<Checkout />} />

        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
