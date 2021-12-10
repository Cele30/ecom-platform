import React, { useCallback, useEffect, useState } from 'react';
import {
  FaSearch,
  FaThLarge,
  FaShoppingBag,
  FaUserAlt,
  FaAngleDown,
} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import NavigationItems from './NavigationItems/NavigationItems';
import { signOut, getAuth } from 'firebase/auth';
import {
  retrieveProductCategories,
  setSearchTerm,
} from '../../store/products/products.slice';

function Toolbar({ openSideDrawer }) {
  const { currentUser } = useSelector(state => state.auth);
  const { productCategories } = useSelector(state => state.products);
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const auth = getAuth();

  const [searchInput, setSearchInput] = useState('');

  const initFetch = useCallback(() => {
    dispatch(retrieveProductCategories());
  }, [dispatch]);
  useEffect(() => initFetch(), [initFetch]);

  const handleSubmit = event => {
    console.log(pathname);
    event.preventDefault();
    dispatch(setSearchTerm(searchInput));
  };

  return (
    <header className="w-full bg-white md:mt-4">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <FaThLarge
            className="sm:hidden mr-12"
            onClick={() => openSideDrawer(true)}
          />

          <div className="mr-2">
            <Link to="/">
              <img
                src="/assets/images/logo.jpg"
                alt="logo"
                className="object-contain w-32"
              />
            </Link>
          </div>

          <nav className="mr-6 flex-grow hidden sm:block">
            <NavigationItems productCategories={productCategories} />
          </nav>
          {[
            '/shop/shoes',
            '/shop/bags',
            '/shop/watches',
            '/shop/clothes',
          ].indexOf(pathname) + 1 && (
            <div className="flex items-center hidden md:flex">
              <div className="relative text-gray-600 focus-within:text-gray-400">
                <form onSubmit={handleSubmit}>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="button"
                      className="p-1 focus:outline-none focus:shadow-outline"
                    >
                      <FaSearch />
                    </button>
                  </span>
                  <input
                    type="search"
                    className="py-2 text-sm border rounded pl-10 focus:outline-none focus:text-gray-900"
                    placeholder="Search product..."
                    autoComplete="off"
                    value={searchInput}
                    onChange={event => setSearchInput(event.target.value)}
                  />
                </form>
              </div>
            </div>
          )}
          <Link
            to="/cart"
            className="py-3 px-4 hover:bg-gray-200 lg:mr-8 flex items-center relative"
          >
            <FaShoppingBag />
            {items.length > 0 && (
              <div className="w-5 h-5 rounded-full bg-red-500 absolute -top-1 -right-1 text-xs font-bold text-white flex items-center justify-center">
                {items.length}
              </div>
            )}
          </Link>

          {currentUser ? (
            <div className="group">
              <div className="relative flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 ">
                <FaUserAlt />
                <p>{currentUser.username}</p>
                <FaAngleDown />
              </div>

              <div className="hidden group-hover:block absolute bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow w-24">
                <ul className="py-1">
                  <li>
                    <Link
                      to={`profile/${currentUser.username}`}
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 w-full text-left"
                      onClick={() => signOut(auth)}
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-8 hidden lg:flex ">
              <div className="flex items-center gap-4">
                {pathname !== '/signup' && (
                  <Link
                    to="signup"
                    className="bg-black text-white  text-sm font-semibold inline-block px-4 py-1.5"
                  >
                    Sign Up
                  </Link>
                )}
                {pathname !== '/login' && (
                  <Link
                    to="login"
                    className="text-gray-500 border border-gray-300 text-sm inline-block px-4 py-1.5 hover:bg-gray-100"
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Toolbar;
