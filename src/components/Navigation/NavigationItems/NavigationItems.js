import React from 'react'
import NavigationItem from './NavigationItem'
import { FaShoppingCart, FaBookOpen, FaClipboardList } from 'react-icons/fa'

function NavigationItems() {
  return (
    <ul className='flex flex-col list-none'>
      <NavigationItem link='/' exact='true'><FaBookOpen /> Catalogue</NavigationItem>
      <NavigationItem link='/'><FaShoppingCart /> Your Cart</NavigationItem>
      <NavigationItem link='/'><FaClipboardList /> Order History</NavigationItem>
    </ul>
  )
}

export default NavigationItems
