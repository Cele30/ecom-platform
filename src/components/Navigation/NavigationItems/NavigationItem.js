import React from 'react'
import { NavLink } from 'react-router-dom'

function NavigationItem({ link = '/', children, icon: Icon, title }) {
  return (
    <li className='text-sm inline-block px-2'>
      <NavLink to={link}
        className={navData => navData.isActive ? 'text-black flex items-center gap-4 ' : 'text-white flex items-center gap-4 sm:text-gray-500'}
      >
        {Icon && <Icon className='sm:hidden' />}
        {title}
      </NavLink>
    </li>
  )
}

export default NavigationItem


