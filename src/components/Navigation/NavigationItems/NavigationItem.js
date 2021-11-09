import React from 'react'
import { Link } from 'react-router-dom'

function NavigationItem({ link, exact, children }) {
  return (
    <li className='w-full block mb-8 text-sm'>
      <Link to={link} exact={exact} className='flex items-center gap-4'>{children}</Link>
    </li>
  )
}

export default NavigationItem
