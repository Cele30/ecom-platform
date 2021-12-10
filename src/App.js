import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Shop from './pages/Shop';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/Product/ProductDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Toolbar from './components/Navigation/Toolbar';
import SideDrawer from './components/Navigation/SideDrawer';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

import useAuthListener from './hooks/useAuthListener';
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
  const { currentUser, initializeApp } = useSelector(state => state.auth);
  useAuthListener();

  const openSideDrawer = () => setIsSideDrawerOpen(true);
  const closeSideDrawer = () => setIsSideDrawerOpen(false);

  // if (!initializeApp)
  //   return (
  //     <p className="flex items-center h-screen justify-center text-4xl">
  //       Loading...
  //     </p>
  //   );

  return (
    <>
      <ToastContainer
        position="top-right"
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        autoClose={2000}
        theme="colored"
      />

      <SideDrawer
        isSideDrawerOpen={isSideDrawerOpen}
        closeSideDrawer={closeSideDrawer}
      />
      <Toolbar openSideDrawer={openSideDrawer} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />

        <Route
          path="/cart/checkout"
          element={
            <ProtectedRoute isAuth={currentUser}>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
