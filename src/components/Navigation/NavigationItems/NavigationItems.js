import React from 'react';
import NavigationItem from './NavigationItem';
import {
  FaShoppingCart,
  FaBookOpen,
  FaClipboardList,
  FaHome,
  FaAngleDown,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedProductCategory } from '../../../store/products/products.slice';

function NavigationItems({ productCategories, currentUser }) {
  const dispatch = useDispatch();

  return (
    <ul className="mr-6 flex flex-col gap-6 sm:flex-row sm:items-center">
      <NavigationItem link="/" icon={FaHome} title="Почетна" />
      <NavigationItem link="/about" icon={FaShoppingCart} title="За нас" />

      <li className="text-sm inline-block px-2 group">
        <div className="text-white flex items-center gap-1 sm:text-gray-500 group-hover:text-black cursor-pointer">
          <FaBookOpen className="sm:hidden mr-3" />
          <span>Производи</span>
          <FaAngleDown />
        </div>

        <div className="hidden group-hover:block absolute bg-white border border-gray-300 text-base z-10 list-none divide-y divide-gray-100 rounded shadow-2xl w-44 sm:-ml-10">
          <ul className="py-1">
            {productCategories &&
              productCategories.map(({ categoryId, name }) => (
                <li key={categoryId}>
                  <Link
                    to={`/shop/${name.toLowerCase()}`}
                    className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    onClick={() =>
                      dispatch(setSelectedProductCategory(categoryId))
                    }
                  >
                    {name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </li>

      <NavigationItem link="/contact" icon={FaClipboardList} title="Контакт" />
      <NavigationItem link="/gallery" icon={FaClipboardList} title="Галерија" />
      {currentUser && (
        <NavigationItem
          link="/orders"
          icon={FaClipboardList}
          title="Мои нарачки"
        />
      )}
    </ul>
  );
}

export default NavigationItems;
