import React from 'react'
import NavigationItem from './NavigationItem'
import { FaShoppingCart, FaBookOpen, FaClipboardList, FaHome } from 'react-icons/fa'

function NavigationItems() {
  return (
    <ul className='mr-6 flex flex-col gap-6 sm:flex-row sm:items-center'>
      <NavigationItem link='/'><FaHome className='sm:hidden' /> Home</NavigationItem>
      <NavigationItem link='/about'><FaBookOpen className='sm:hidden' /> About</NavigationItem>
      <NavigationItem link='/shop'><FaBookOpen className='sm:hidden' /> Shop</NavigationItem>
      <NavigationItem link='/contact'><FaShoppingCart className='sm:hidden' /> Contact</NavigationItem>
      <NavigationItem link='/orders'><FaClipboardList className='sm:hidden' /> Orders</NavigationItem>
    </ul>
  )
}

export default NavigationItems
