import React from 'react'
import NavigationItem from './NavigationItem'
import { FaShoppingCart, FaBookOpen, FaClipboardList } from 'react-icons/fa'

function NavigationItems() {
  return (
    <ul className='flex flex-col list-none lg:flex-row items-center'>
      <NavigationItem link='/' exact='true'><FaBookOpen /> Home</NavigationItem>
      <NavigationItem link='/shop' exact='true'><FaBookOpen /> Shop</NavigationItem>
      <NavigationItem link='/cart'><FaShoppingCart /> Your Cart</NavigationItem>
      <NavigationItem link='/orders'><FaClipboardList /> Order History</NavigationItem>
    </ul>
  )
}

export default NavigationItems
